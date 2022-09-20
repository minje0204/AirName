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
    newFemaleState = {}
    newMaleState= {}
    maxFemaleStateName = ""
    maxMaleStateName = ""
    unisex = {}
    for data in result.itertuples():
        if gender=='F' or gender=='U':
            for state in data.female['state']:
                state_year = data.female['state'][state]
                yearIdx = year-1940
                newFemaleState[state] = state_year[yearIdx]
            maxFemaleStateName = max(newFemaleState, key = newFemaleState.get)

        if gender=='M' or gender=='U':
            for state in data.male['state']:
                state_year = data.male['state'][state]
                yearIdx = year-1940
                newMaleState[state] = state_year[yearIdx]
            maxMaleStateName = max(newMaleState, key = newMaleState.get)
        

    report = {}
    female = {}
    male = {}
    resultFemaleMeaning = ""
    resultMaleMeaning = ""

    if gender == 'F':
        resultFemaleMeaning = data.female['meaning']
        report['meaning'] = resultFemaleMeaning
        report['state'] = maxFemaleStateName
        return report

    elif gender == 'M':
        resultMaleMeaning = data.male['meaning']
        report['meaning'] = resultMaleMeaning
        report['state'] = maxMaleStateName
        return report
        
    elif gender == 'U':
        female['meaning'] = data.female['meaning']
        female['state'] = maxFemaleStateName
        male['meaning'] = data.male['meaning']
        male['state'] = maxMaleStateName
    
        unisex['female'] = female
        unisex['male'] = male
        return unisex

