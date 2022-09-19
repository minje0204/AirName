#json파일을 데이터프레임으로 파싱하는 파일
import pandas as pd
import os
import jellyfish
from pymongo import MongoClient

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

def ConnectMongoDB():
    #mongoDB 연결객체 생성
    client = MongoClient(host='localhost', port=27017)
    db = client['airnameDB']
    return db

def LoadDataframes(db, collection_name):
    cursor = db[collection_name].find()
    df = pd.DataFrame(list(cursor))
    # _id 컬럼 삭제
    del df['_id']
    return df

def NysiisCode(name):
    name = jellyfish.nysiis(name)
    return name

def addAttribute(df):
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
    return pd.DataFrame(data=d)

def main():
    db = ConnectMongoDB()
    df = LoadDataframes(db, 'rawData')

    #[기존 코드] json 읽어서 dataframe 생성했던 코드
    #df = pd.read_json('../DataName/mvpNameSet_Behind_Fin_with_count_state.json')

    #data의 이름 컬럼을 numpy배열로 가져옴
    names = df['name'].to_numpy()

    code_table = [] #발음코드 데이터프레임 생성을 위한 테이블
    year_table = [] #연도 데이터프레임 생성을 위한 테이블
    code_columns = ( #발음코드 데이터프레임 생성을 위한 컬럼
        "name", #이름
        "gender", #성별
    )
    year_columns = ( #연도 데이터프레임 생성을 위한 컬럼
        str(1940+i) for i in range(82) #연도, key가 string이어야 mongoDB에 저장됨
    )
    
    #발음코드 데이터프레임 생성
    for data in df.itertuples():

        #성별 컬럼 추가를 위한 작업
        if len(data.female) == 0:
            gender = 'M'
        else :
            if len(data.male) == 0:
                gender = 'F'
            else :
                gender = 'U'

        code_table.append(
            [
                data.name,
                gender,
            ]
        )

    #연도 데이터프레임 생성
    for data in df.itertuples():
        year = [0 for i in range(82)]

        if len(data.female) != 0:
            for state in data.female['state']:
                state_year = data.female['state'][state]
                new_year = [year[i]+state_year[i] for i in range(len(year))]
                year = new_year

        if len(data.male) != 0:
            for state in data.male['state']:
                state_year = data.male['state'][state]
                new_year = [year[i]+state_year[i] for i in range(len(year))]
                year = new_year

        year_table.append(year)

    df_code = pd.DataFrame(data=code_table, columns=code_columns)
    df_year = pd.DataFrame(data=year_table, columns=year_columns)

    #발음코드 데이터프레임에 nysiis 컬럼 추가
    df_code['nysiis'] = df_code['name'].apply(NysiisCode)
    df_year.insert(0,'name',names)

    #[기존 코드] DataFrame을 pickle 파일로 저장해 다른 py파일에서 사용가능하도록 함
    # DumpDataframes(df_code,"code_dump")
    # DumpDataframes(df_year,"year_dump")

    #생성한 DataFrame을 mongoDB에 저장
    code_collection = db['codename']
    df_code.reset_index(inplace=True)
    df_code_dict = df_code.to_dict("records")
    code_collection.insert_many(df_code_dict)

    year_collection = db['yearname']
    df_year.reset_index(inplace=True)
    df_year_dict = df_year.to_dict("records")
    year_collection.insert_many(df_year_dict)

    atm_collection = db['atm']
    atm_collection.insert_many(addAttribute(df).to_dict('records'))
   

if __name__ == '__main__':
    main()
