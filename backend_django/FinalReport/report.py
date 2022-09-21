import pandas as pd
from pymongo import MongoClient
from RecName.connection import *

def GetReportData(name, gender, birth):
    db = ConnectMongoDB()
    # df = LoadDataframes(db, 'rawdata')

    # result = df.copy()
    # result = result[result['name']==name]

    col = db['rawdata']
    doc = col.find_one({"name":name})
    result= pd.DataFrame(doc)
    yearIdx = 0
    newFemaleState = {}
    newMaleState= {}
    maxFemaleStateName = ""
    maxMaleStateName = ""
    unisex = {}

    if gender=='F' or gender=='U':
        for state in result.female['state']:
            state_year = result.female['state'][state]
            yearIdx = birth-1940
            newFemaleState[state] = state_year[yearIdx]
        maxFemaleStateName = max(newFemaleState, key = newFemaleState.get)

    if gender=='M' or gender=='U':
        for state in result.male['state']:
            state_year = result.male['state'][state]
            yearIdx = birth-1940
            newMaleState[state] = state_year[yearIdx]
        maxMaleStateName = max(newMaleState, key = newMaleState.get)

    report = {}
    female = {}
    male = {}
    resultFemaleMeaning = ""
    resultMaleMeaning = ""

    if gender == 'F':
        resultFemaleMeaning = result.female['meaning']
        report['meaning'] = resultFemaleMeaning
        report['state'] = maxFemaleStateName
        return report

    elif gender == 'M':
        resultMaleMeaning = result.male['meaning']
        report['meaning'] = resultMaleMeaning
        report['state'] = maxMaleStateName
        return report
        
    elif gender == 'U':
        female['meaning'] = result.female['meaning']
        female['state'] = maxFemaleStateName
        male['meaning'] = result.male['meaning']
        male['state'] = maxMaleStateName
    
        unisex['female'] = female
        unisex['male'] = male
        return unisex

