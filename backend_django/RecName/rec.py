import sqlite3
import os
import sys
import jellyfish
import urllib.request
import pandas as pd
from bs4 import BeautifulSoup


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


def JaroDistance(data, name):
    NysCode = jellyfish.nysiis(name)
    sim = jellyfish.jaro_distance(data,NysCode)
    return sim
