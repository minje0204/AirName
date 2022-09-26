import pandas as pd
from pymongo import MongoClient
from RecName.connection import *

def GetReportData(name, birth):
    db = ConnectMongoDB()

    col = db['rawdata']
    doc = col.find_one({"name":name})
    result= pd.DataFrame(doc)
    yearIdx = 0
    newFemaleState = {}
    newMaleState= {}
    maxFemaleStateName = ""
    maxMaleStateName = ""
    unisex = {}
    totalPopularity = 0
    if not result.female.hasnans:
        for state in dict(result.female['state']).keys():
            state_year = result.female['state'][state]
            totalPopularity = sum(state_year)
            yearIdx = birth-1940
            if(totalPopularity == 0): continue
            newFemaleState[state] = state_year[yearIdx]/totalPopularity
        maxFemaleStateName = max(newFemaleState, key = newFemaleState.get)

    if not result.male.hasnans:
        for state in dict(result.male['state']).keys():
            state_year = result.male['state'][state]
            totalPopularity = sum(state_year)
            yearIdx = birth-1940
            if(totalPopularity == 0): continue
            newMaleState[state] = state_year[yearIdx]/totalPopularity
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

