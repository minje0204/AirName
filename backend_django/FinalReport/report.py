import pandas as pd
from pymongo import MongoClient
from RecName.connection import *

def GetReportData(name, birth):
    db = ConnectMongoDB()

    col = db['rawdata']
    doc = col.find_one({"name":name})
    yearIdx = 0
    newFemaleState = {}
    newMaleState= {}
    maxFemaleStateName = ""
    maxMaleStateName = ""
    unisex = {}
    totalPopularity = 0
    if len(doc['female'])!=0:
        for state in doc['female']['state'].keys():
            state_year = doc['female']['state'][state]
            totalPopularity = sum(state_year)
            yearIdx = birth-1940
            if(totalPopularity == 0): continue
            newFemaleState[state] = state_year[yearIdx]/totalPopularity
        maxFemaleStateName = max(newFemaleState, key = newFemaleState.get)

    if len(doc['male'])!=0:
        for state in doc['male']['state'].keys():
            state_year = doc['male']['state'][state]
            totalPopularity = sum(state_year)
            yearIdx = birth-1940
            if(totalPopularity == 0): continue
            newMaleState[state] = state_year[yearIdx]/totalPopularity
        maxMaleStateName = max(newMaleState, key = newMaleState.get)
    female = {}
    male = {}
    if (len(doc['female'])!=0) & (len(doc['male'])!=0) :
        female['state'] = maxFemaleStateName
        male['state'] = maxMaleStateName

        unisex['female'] = female
        unisex['male'] = male
        unisex['meaning'] = doc['meaning']
        return unisex
    elif (len(doc['female'])==0) & (len(doc['male'])!=0):
        female['state'] = ""
        male['state'] = maxMaleStateName
        unisex['female'] = female
        unisex['male'] = male
        unisex['meaning'] = doc['meaning']
        return unisex
    elif (len(doc['male'])==0) & (len(doc['female'])!=0):
        female['state'] = maxFemaleStateName
        male['state'] = ""
        
        unisex['female'] = female
        unisex['male'] = male
        unisex['meaning'] = doc['meaning']
        return unisex
