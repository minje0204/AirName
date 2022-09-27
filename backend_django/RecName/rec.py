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

def JaroDistance(data, name):
    NysCode = jellyfish.nysiis(name)
    sim = jellyfish.jaro_distance(data,NysCode)
    return sim

def Filter(dataframes, gender, year):
    #성별 필터
    #설문조사에서 응답한 값에 따라 데이터셋 자체에서 필터링
    if gender == 'M':
        dataframes = dataframes[(dataframes['gender']=='M') | (dataframes['gender']=='U')]
    elif gender == 'F':
        dataframes = dataframes[(dataframes['gender']=='F') | (dataframes['gender']=='U')]

    #연령대 필터
    #같은 년도에서 사용빈도가 적으면 가중치 떨어지도록 설정

    #연도 데이터프레임 불러옴
    db = ConnectMongoDB()
    year_data = LoadDataframes(db, 'yearname')
    # data = data.sort_values(year,ascending=False)
    # print(data)

    return dataframes

def Recommend(kor_name, gender, year):
    #[기존 코드] 발음코드 데이터프레임 불러옴
    #data = LoadDataframes("code_dump")

    db = ConnectMongoDB()
    #codename collection에서 가져옴
    data = LoadDataframes(db, 'codename')

    #로마화
    rom_name = Romanization(kor_name)

    #404에러면 404코드값을 반환
    if rom_name == 404:
        return rom_name
    else:
        #nysiis 코드값 부여
        global nys_name
        nys_name = jellyfish.nysiis(rom_name)

        #nysiis similarity 컬럼 추가한 DataFrame 생성
        df_sim = data.copy()
        df_sim['nysiis_sim'] = df_sim['nysiis'].apply(NameSimilarity)
        #유사도 기준 정렬
        df_sim = df_sim.sort_values('nysiis_sim',ascending=False)

        #필터링(gender~rarity 부분을 설문조사 배열 형태로 넘길지 생각중)
        df_sim = Filter(df_sim, gender, year)

        #dict형태로 만들어야 Json으로 변환할 수 있다. (Front에 Json으로 리턴해주기 위함)
        name_array = {}
        df_drop_dup = df_sim['nysiis'].drop_duplicates().head(4).to_numpy()

        for data in df_drop_dup:
            df_new = df_sim.copy()

            df_random = df_new[df_new['nysiis']==data].sample(n=1).to_numpy()
            name_array[df_random[0][1]] = {'type':'sound','sim':round(df_random[0][4]*100)}

        return name_array

def AtmRecommend(AtmInput):
    db = ConnectMongoDB()
    df = LoadDataframes(db, 'atm')
    processedInput = preProcessAtmInput(AtmInput)
    df['score'] = df.apply(lambda row : add(list(map(lambda x: row[x],processedInput))), axis = 1)

    name_array=df.sort_values(by=['score'],ascending=False).head(2)
    name_array=name_array['name'].to_numpy()

    return name_array

# def NameFormating(atm,sound):
def NameFormating(sound):
    selected_arr = {}

    ###########
    #atm을 selected_arr에 먼저 추가하는 코드 필요
    ###########

    for data in sound:
        if len(selected_arr) == 4:
            break

        if type(data) != int and data not in selected_arr:
            selected_arr[data] = sound[data]

    return selected_arr

def add(attrV):
    sum=0
    for i in attrV:
        sum+=i
    return sum

def preProcessAtmInput(AtmInput):
    rt = []
    for item in AtmInput.items():
        if(item[1] != 2):
            rt.append(keyMap[item[0]][item[1]])
    return rt

keyMap = {'Gender': ['Masculine','Feminine'],"OldFashionedness":['Classic','Modern'],"Oldness":['Mature','Youthful'],"Formality":['Formal','Informal'],"Class":['Upper Class','Common'],"Urban-rural":['Urban','Natural'],"Truthfulness":['Wholesome','Devious'],
 "Extremly":['Strong','Delicate'],"Roughness":['Refined','Rough'],"Strangeness":['Strange','Boring'],"Complexness":['Simple','Complex'],"Seriousness":['Serious','Comedic']}
