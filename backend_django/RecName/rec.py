import sqlite3
import os
import sys
import jellyfish
import urllib.request
import pandas as pd
from bs4 import BeautifulSoup

DATA_DIR = "DataName"
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

def LoadDataframes():
    return pd.read_pickle(DUMP_FILE)

def Romanization(input):
    kor_name = urllib.parse.quote(input)

    url = "https://dict.naver.com/name-to-roman/translation/?query=" + kor_name

    request = urllib.request.Request(url)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()

    if(rescode==200):
        response_body = response.read().decode('utf-8')
        bs = BeautifulSoup(response_body, 'html.parser')
        name_tags = bs.select('#container > div > table > tbody > tr > td > a')

        raw_name = name_tags[0].text
        blank_index = raw_name.index(' ')
        refined_name = raw_name[blank_index+1:]

        return refined_name

    else:
        print("Error Code:" + rescode)

def NameSimilarity(name):
    sim = jellyfish.jaro_distance(name,nys_name)
    return sim

def JaroDistance(data, name):
    NysCode = jellyfish.nysiis(name)
    sim = jellyfish.jaro_distance(data,NysCode)
    return sim

def Filter(dataframes):
    #연령대 필터
    #1안. 내 나이에서 멀어질수록 가중치가 낮아짐
    #이 경우
    #2안. 내 나이 +-3년 안에 있는 데이터만 이용

    #성별 필터
    #설문조사에서 응답한 값에 따라 데이터셋 자체에서 필터링

    #희귀도 필터
    #연령대, 성별 필터를 거친 후 추천도가 같은 배열에 대하여 희귀도 순으로 정렬

    return 0

def Recommend(kor_name):
    data = LoadDataframes()

    #로마화
    rom_name = Romanization(kor_name)

    #nysiis 코드값 부여
    global nys_name
    nys_name = jellyfish.nysiis(rom_name)

    #nysiis similarity 컬럼 추가한 DataFrame 생성
    df_sim = data.copy()
    df_sim['nysiis_sim'] = df_sim['nysiis'].apply(NameSimilarity)
    #유사도 기준 정렬
    df_sim = df_sim.sort_values('nysiis_sim',ascending=False)

    name_array = df_sim['name'].head(4).to_numpy()
    #list를 dict로 바꿔야 Json으로 변환할 수 있다. (Front에 Json으로 리턴해주기 위함)
    name_array = dict(enumerate(name_array))

    return name_array
