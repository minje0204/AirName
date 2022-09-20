import pandas as pd
from pymongo import MongoClient


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

def GetReportData(name, gender, qyear):
    db = ConnectMongoDB()
    df = LoadDataframes(db, 'rawdata')

    result = df.copy()
    result = result[result['name']==name]
    emptyData = pd.DataFrame()

    name=[]
    newYear = []
    for data in result.itertuples():
        if len(data.female) != 0:
            for state in data.female['state']:
                state_year = data.female['state'][state]
                newYear.

        #         내가 태어난 년도 안에서 state -> max값을 반환





        if len(data.male) != 0:
            for state in data.male['state']:
                state_year = data.male['state'][state]


    del result["state"]

    dict(enmurate(result))


    return
