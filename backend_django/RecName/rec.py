import sqlite3
import os
import sys
import jellyfish
import urllib.request
from parse import *
import pandas as pd
from bs4 import BeautifulSoup

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


def main():
    data = LoadDataframes()

    #rest API로 바꿔야할 부분
    print("한국 이름을 입력하세요.")
    kor_name = input()

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

    name_array = df_sim['name'].to_numpy()
    print(name_array[1])

if __name__ == '__main__':
    main()
