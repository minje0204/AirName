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
        if len(newFemaleState) != 0:
            maxFemaleStateName = max(newFemaleState, key = newFemaleState.get)
        else:
            maxFemaleStateName = ""

    if len(doc['male'])!=0:
        for state in doc['male']['state'].keys():
            state_year = doc['male']['state'][state]
            totalPopularity = sum(state_year)
            yearIdx = birth-1940
            if(totalPopularity == 0): continue
            newMaleState[state] = state_year[yearIdx]/totalPopularity
        if len(newMaleState) != 0: 
            maxMaleStateName = max(newMaleState, key = newMaleState.get)
        else:
            maxMaleStateName = ""
    female = {}
    male = {}
    if (len(doc['female'])!=0) & (len(doc['male'])!=0) :
        female['state'] = maxFemaleStateName
        female['celebrity'] = doc['female']['celebrity']
        female['character'] = doc['female']['character']
        male['state'] = maxMaleStateName
        male['celebrity'] = doc['male']['celebrity']
        male['character'] = doc['male']['character']

        unisex['female'] = female
        unisex['male'] = male
        unisex['meaning'] = doc['meaning']
        return unisex
    elif (len(doc['female'])==0) & (len(doc['male'])!=0):
        female['state'] = ""
        female['celebrity'] = ""
        female['character'] = ""
        male['state'] = maxMaleStateName
        male['celebrity'] = doc['male']['celebrity']
        male['character'] = doc['male']['character']

        unisex['female'] = female
        unisex['male'] = male
        unisex['meaning'] = doc['meaning']
        return unisex
    elif (len(doc['male'])==0) & (len(doc['female'])!=0):
        female['state'] = maxFemaleStateName
        female['celebrity'] = doc['female']['celebrity']
        female['character'] = doc['female']['character']
        male['state'] = ""
        male['celebrity'] = ""
        male['character'] = ""

        unisex['female'] = female
        unisex['male'] = male
        unisex['meaning'] = doc['meaning']
        return unisex
