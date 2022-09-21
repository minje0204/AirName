import pandas as pd
from pymongo import MongoClient
from RecName.connection import *

def GetReportData(name, birth):
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

    print("Result")
    print(result.male)
    print("여성 길이")
    print(len(result.female))

    
    print("남성 길이")
    print(len(result.male))
    print("컨테인스")
    print(result.male.hasnans)
    print("여자컨테인스")
    print(result.female.hasnans)

    if not result.female.hasnans:
        for state in dict(result.female['state']).keys():
            state_year = result.female['state'][state]
            yearIdx = birth-1940
            newFemaleState[state] = state_year[yearIdx]
        maxFemaleStateName = max(newFemaleState, key = newFemaleState.get)

    if not result.male.hasnans:
        for state in dict(result.male['state']).keys():
            state_year = result.male['state'][state]
            yearIdx = birth-1940
            newMaleState[state] = state_year[yearIdx]
        maxMaleStateName = max(newMaleState, key = newMaleState.get)
    female = {}
    male = {}

    if (not result.female.hasnans) & (not result.male.hasnans) :
        female['meaning'] = result.female['meaning']
        female['state'] = maxFemaleStateName
        male['meaning'] = result.male['meaning']
        male['state'] = maxMaleStateName

        unisex['female'] = female
        unisex['male'] = male
        return unisex
    elif result.female.hasnans | (not result.male.hasnans):
        female['meaning'] = ""
        female['state'] = ""
        male['meaning'] = result.male['meaning']
        male['state'] = maxMaleStateName
        unisex['female'] = female
        unisex['male'] = male
        return unisex
    elif result.male.hasnans & (not result.female.hasnans):
        female['meaning'] = result.female['meaning']
        female['state'] = maxFemaleStateName
        male['meaning'] = ""
        male['state'] = ""
        unisex['female'] = female
        unisex['male'] = male
        return unisex

