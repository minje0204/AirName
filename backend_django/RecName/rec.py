import sqlite3
import os
import sys
import jellyfish
import urllib.request
import numpy as np
import pandas as pd
from bs4 import BeautifulSoup
from .connection import *
from pymongo import MongoClient
import random
import re
from soynlp.hangle import jamo_levenshtein

def Romanization(input):
    kor_name = urllib.parse.quote(input)

    url = "https://dict.naver.com/name-to-roman/translation/?query=" + kor_name

    request = urllib.request.Request(url)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()

    if rescode == 200:
        response_body = response.read().decode('utf-8')
        bs = BeautifulSoup(response_body, 'html.parser')
        name_tags = bs.select('#container > div > table > tbody > tr > td > a')

        #name_tags가 공란이면 입력한 한글이름에 맞는 변환값이 없다는 뜻. 404에러를 반환
        if len(name_tags) == 0:
            refined_name = 404
        else :
            raw_name = name_tags[0].text
            blank_index = raw_name.index(' ')
            refined_name = raw_name[blank_index+1:]

    #200 이외의 status code를 받았을 때 코드값 오류를 반환
    else:
        refined_name = rescode

    return refined_name

def NameSimilarity(name):
    sim = jellyfish.jaro_distance(name,nys_name)
    return sim

def KorSimilarity(pron):
    sim = jamo_levenshtein(pron,kor_code)
    return sim

def JaroDistance(data, name):
    NysCode = jellyfish.nysiis(name)
    sim = jellyfish.jaro_distance(data,NysCode)
    return sim

def GenderFilter(dataframes, gender):
    #성별 필터
    #설문조사에서 응답한 값에 따라 데이터셋 자체에서 필터링
    if gender == 'M':
        dataframes = dataframes[(dataframes['gender']=='M') | (dataframes['gender']=='U')]
    elif gender == 'F':
        dataframes = dataframes[(dataframes['gender']=='F') | (dataframes['gender']=='U')]

    return dataframes

def RarityFilter(dataframes, year, rarity, type):
    #희귀도 필터(입력 연도에 대해)
    #연도 데이터프레임 불러옴
    db = ConnectMongoDB()
    year_data = LoadDataframes(db, 'yearname')

    year_dataframes = year_data.sort_values(str(year),ascending=False)

    year_dataframes = year_dataframes[year_dataframes[str(year)]>0]
    global year_length
    year_length = len(year_dataframes)

    year_dataframes.reset_index(drop=True, inplace=True)
    year_dataframes_modify = year_dataframes.rename_axis('rank').reset_index()

    year_dataframes_modify['rarity'] = year_dataframes_modify['rank'].apply(NameRarity)

    #기존 dataframes에 rarity값을 합치도록 inner merge
    dataframes = pd.merge(dataframes, year_dataframes_modify)

    if type=='original':
        if rarity==0:
            level='high'
        elif rarity==1:
            level='medium'
        else:
            level='low'

        dataframes = dataframes[dataframes['rarity']==level]

    return dataframes

def NameRarity(index):
    if index < round(year_length/4):
        rarity = 'low'
    elif index > round(year_length/4*3):
        rarity = 'high'
    else:
        rarity = 'medium'

    return rarity

def Recommend(rcm_data):
    #[기존 코드] 발음코드 데이터프레임 불러옴
    #data = LoadDataframes("code_dump")

    kor_name = rcm_data['name']
    gender = rcm_data['gender']
    year = rcm_data['birth']
    rarity = rcm_data['rarity']
    # attr =

    db = ConnectMongoDB()
    #codename collection에서 가져옴
    data = LoadNewDataframes(db, 'codename')

    #로마화
    rom_name = Romanization(kor_name)

    # #404에러면 404코드값을 반환, 현재 이름 유효성검사로 체크해주고 있어서 주석처리
    # if rom_name == 404:
    #     return rom_name
    # else:
    #nysiis 코드값 부여
    global nys_name
    nys_name = jellyfish.nysiis(rom_name)

    df_sim = data.copy()

    #필터링
    df_sim = GenderFilter(df_sim, gender)
    df_sim = RarityFilter(df_sim, year, rarity, 'original')

    global kor_code
    kor_code = kor_name[1:]

    df_kor_sim = data.copy()

    # nysiis similarity 컬럼 추가한 DataFrame 생성
    df_kor_sim['kor_sim'] = df_kor_sim['pron'].apply(KorSimilarity)
    df_kor_sim = df_kor_sim.sort_values('kor_sim', ascending=True)

    cut = df_kor_sim.head(1).to_numpy()

    if cut[0][5] > 0.68:
        # nysiis similarity 컬럼 추가한 DataFrame 생성
        df_sim['nysiis_sim'] = df_sim['nysiis'].apply(NameSimilarity)

        #유사도 기준 정렬
        df_sim = df_sim.sort_values('nysiis_sim',ascending=False)

        #dict형태로 만들어야 Json으로 변환할 수 있다. (Front에 Json으로 리턴해주기 위함)
        name_array = {}
        df_drop_dup = df_sim['nysiis'].drop_duplicates().head(4).to_numpy()

        for data in df_drop_dup:
            df_new = df_sim.copy()
            df_random = df_new[df_new['nysiis']==data].sample(n=1).to_numpy()

            name_array[df_random[0][1]] = {'type':'sound','sim':round(df_random[0][89]*100),
                                           'rank':str(df_random[0][5]),'percent':str(round(df_random[0][5]/year_length*100))}

    else:
        # dict형태로 만들어야 Json으로 변환할 수 있다. (Front에 Json으로 리턴해주기 위함)
        name_array = {}

        # 필터링
        df_kor_sim = RarityFilter(df_kor_sim, year, rarity, 'kor')

        for data in df_kor_sim.head(4).to_numpy():
            name_array[data[1]] = {'type': 'sound', 'sim': round((2.0-data[5])/2.0 * 100),
                                           'rank': str(data[6]),
                                           'percent': str(round(data[6] / year_length * 100))}


    return name_array

def AtmRecommend(rcm_data):
    AtmInput = rcm_data['attr']
    year = rcm_data['birth']
    rarity = rcm_data['rarity']

    db = ConnectMongoDB()
    df = LoadDataframes(db, 'atm')
    processedInput = preProcessAtmInput(AtmInput)

    df[['score','tag']] = df.apply(lambda row : processATM(list(map(lambda x: row[x],processedInput)),processedInput), axis = 1,result_type='expand')
    df = RarityFilter(df, year, rarity, 'original')
    df_random = df.sort_values(by=['score'],ascending=False).head(2)
    name_array = {}

    for row in range(df_random.shape[0]):
        tagList = df_random.iloc[row]['tag']


        tagTup = {}
        for attrPair in keyMap.values():
            for attr in attrPair:
                tagTup[attr]=df_random.iloc[row][attr]
        other = {k: v for k, v in sorted(tagTup.items(), key=lambda item: item[1], reverse=True)}

        rOther={}
        for i,(k,v) in enumerate(other.items()):
            if i>=4: 
                break
            rOther[k]=v


        rkeys = list(rOther.keys())

        userInput={}
        for tag in list(tagList):
            for otTag in rkeys:
                if(tag==otTag):
                    userInput[tag] = other[tag]
                    del rOther[tag]

        rt={"userInput":{},"other":{}}
        
        rt["userInput"] = userInput
        rt["other"] = rOther

        name_array[df_random.iloc[row]['name']] = {'type':'atm','sim':rt,'rank':str(df_random.iloc[row]['rank']),'percent':str(round(df_random.iloc[row]['rank']/year_length*100,2))}

    #dict형태로 만들어야 Json으로 변환할 수 있다. (Front에 Json으로 리턴해주기 위함)    
    return name_array

def NameFormating(atm,sound):
    selected_arr = {}

    for data in atm:
        selected_arr[data] = atm[data]

    for data in sound:
        if len(selected_arr) == 4:
            break

        if type(data) != int and data not in selected_arr:
            selected_arr[data] = sound[data]

    return selected_arr

def processATM(attrVal,attr):
    sum=0
    tag=[]
    for idx,val in enumerate(attrVal):
        if val>0.5:
            tag.append(attr[idx])
        sum+=val
    return sum,tag

def preProcessAtmInput(AtmInput):
    rt = []
    for item in AtmInput.items():
        if(item[1] != 2):
            rt.append(keyMap[item[0]][item[1]])
    return rt

def CheckingKorean(name):
    pattern = re.compile(r'[가-힣]')
    check = True

    for str in name :
        results = pattern.match(str)
        if results == None :
            check = False
            break

    return check

def CheckingLength(name):
    check = False
    if len(name) > 1:
        check = True

    return check

def CheckingRoman(name, kor, len):
    check_array = {}

    if kor == False:
        check_array['check'] = False
        check_array['msg'] = '한글 이름을 입력해주세요.'
    elif len == False:
        check_array['check'] = False
        check_array['msg'] = '두 글자 이상 입력해주세요.'
    else :
        #로마화 유효성 판단
        rom_name = Romanization(name)
        #404에러면 404코드값을 반환
        if rom_name == 404:
            check_array['check'] = False
            check_array['msg'] = '성을 포함한 올바른 이름을 입력해주세요.'
        else:
            check_array['check'] = True
            check_array['msg'] = '사용할 수 있는 이름입니다.'

    return check_array

keyMap = {'Gender': ['Masculine','Feminine'],"OldFashionedness":['Classic','Modern'],"Oldness":['Mature','Youthful'],"Formality":['Formal','Informal'],"Class":['Upper Class','Common'],"Urban-rural":['Urban','Natural'],"Truthfulness":['Wholesome','Devious'],
 "Extremly":['Strong','Delicate'],"Roughness":['Refined','Rough'],"Strangeness":['Strange','Boring'],"Complexness":['Simple','Complex'],"Seriousness":['Serious','Comedic']}
