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

def GetReportData(name, gender, year):
    db = ConnectMongoDB()
    df = LoadDataframes(db, 'rawdata')

    result = df.copy()
    result = result[result['name']==name]

    yearIdx = 0
    newState= {}
    maxState = ""
    for data in result.itertuples():
        if gender=='F':
            for state in data.female['state']:
                state_year = data.female['state'][state]
                yearIdx = year-1940
                newState[state] = state_year[yearIdx]
                maxState = max(newState, key = newState.get)
        #         내가 태어난 년도 안에서 state -> max값을 반환
        elif gender=='M':
            for state in data.male['state']:
                state_year = data.male['state'][state]
                yearIdx = year-1940
                newState[state] = state_year[yearIdx]
                maxState = max(newState, key = newState.get)

    maxCount = newState[maxState]
    resultMeaning = ''
    if gender == 'F':
        resultMeaning = data.female['meaning']
    elif gender == 'M':
        resultMeaning = data.male['meaning']

    report = {}
    report['meaning'] = resultMeaning
    report['state'] = maxState

    return report
    