#json파일을 데이터프레임으로 파싱하는 파일
import pandas as pd
import os
import jellyfish
from pymongo import MongoClient
from connection import *
from rec import *

# [기존 코드] 디렉토리에 pickle 저장해서 이용하는 방법
# def Directory(dir):
#     filename = dir + ".pkl"
#     DATA_DIR = "../DataName"
#     DUMP_FILE = os.path.join(DATA_DIR, filename)
#     return DUMP_FILE
# 
# def DumpDataframes(dataframes, filename):
#     pd.to_pickle(dataframes, Directory(filename))
# 
# def LoadDataframes(filename):
#     return pd.read_pickle(Directory(filename))

def NysiisCode(name):
    name = jellyfish.nysiis(name)
    return name

def CreateCodename(db, dataframes):
    code_table = []  # 발음코드 데이터프레임 생성을 위한 테이블
    code_columns = (  # 발음코드 데이터프레임 생성을 위한 컬럼
        "name",  # 이름
        "gender",  # 성별
    )

    # 발음코드 데이터프레임 생성
    for data in dataframes.itertuples():

        # 성별 컬럼 추가를 위한 작업
        if len(data.female) == 0:
            gender = 'M'
        else:
            if len(data.male) == 0:
                gender = 'F'
            else:
                gender = 'U'

        code_table.append(
            [
                data.name,
                gender,
            ]
        )

    df_code = pd.DataFrame(data=code_table, columns=code_columns)

    # 발음코드 데이터프레임에 nysiis 컬럼 추가
    df_code['nysiis'] = df_code['name'].apply(NysiisCode)

    # 생성한 DataFrame을 mongoDB에 저장
    SaveDataframes(db, df_code, 'codename')

def CreateYearname(db, dataframes):
    year_table = []  # 연도 데이터프레임 생성을 위한 테이블
    year_columns = (  # 연도 데이터프레임 생성을 위한 컬럼
        str(1940 + i) for i in range(82)  # 연도, key가 string이어야 mongoDB에 저장됨
    )

    # 연도 데이터프레임 생성
    for data in dataframes.itertuples():
        year = [0 for i in range(82)]

        if len(data.female) != 0:
            for state in data.female['state']:
                state_year = data.female['state'][state]
                new_year = [year[i] + state_year[i] for i in range(len(year))]
                year = new_year

        if len(data.male) != 0:
            for state in data.male['state']:
                state_year = data.male['state'][state]
                new_year = [year[i] + state_year[i] for i in range(len(year))]
                year = new_year

        year_table.append(year)

    df_year = pd.DataFrame(data=year_table, columns=year_columns)

    # data의 이름 컬럼을 numpy배열로 가져옴
    names = dataframes['name'].to_numpy()
    df_year.insert(0, 'name', names)

    # 생성한 DataFrame을 mongoDB에 저장
    SaveDataframes(db, df_year, 'yearname')

def CreateAtmName(db,df):
    d={'name':[],'gender':[]}
    firstValidSex = 'female'

    if len(df.at[0,'female']) ==0:
        firstValidSex='male'

    for attr in df.at[0,firstValidSex]['attribute']:
        d[attr] = []

    for name in df.itertuples(index=True):
        d['name'].append(name.name)
        if(len(name.female) != 0 ):
            d['gender'].append('F')
            for i in range(0, len(name.female['attribute'].keys()), 2) :    
                if(list(name.female['attribute'].values())[i] > list(name.female['attribute'].values())[i+1]):
                    d[list(name.female['attribute'].keys())[i]].append(1)
                    d[list(name.female['attribute'].keys())[i+1]].append(0)
                else:
                    d[list(name.female['attribute'].keys())[i]].append(0)
                    d[list(name.female['attribute'].keys())[i+1]].append(1)
        elif(len(name.male) != 0 ):
            d['gender'].append('M')
            for i in range(0, len(name.male['attribute'].keys()), 2) :    
                if(list(name.male['attribute'].values())[i] > list(name.male['attribute'].values())[i+1]):
                    d[list(name.male['attribute'].keys())[i]].append(1)
                    d[list(name.male['attribute'].keys())[i+1]].append(0)
                else:
                    d[list(name.male['attribute'].keys())[i]].append(0)
                    d[list(name.male['attribute'].keys())[i+1]].append(1)
    
    SaveDataframes(db, pd.DataFrame(data=d), 'atm')

def main():
    # db = ConnectMongoDB()
    # df = LoadDataframes(db, 'rawdata')
    #
    # CreateCodename(db, df)
    # CreateYearname(db, df)
    # CreateAtmName(db,df)
    print(CheckingKorean("김상협"))

    #[기존 코드] json 읽어서 dataframe 생성했던 코드
    #df = pd.read_json('../DataName/mvpNameSet_Behind_Fin_with_count_state.json')

    #[기존 코드] DataFrame을 pickle 파일로 저장해 다른 py파일에서 사용가능하도록 함
    # DumpDataframes(df_code,"code_dump")
    # DumpDataframes(df_year,"year_dump")

    
if __name__ == '__main__':
    main()
