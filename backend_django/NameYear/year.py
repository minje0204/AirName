import pandas as pd
from pymongo import MongoClient
from RecName.connection import *
def GetNamePerYear(name):
    db = ConnectMongoDB()

    col = db['rawdata']
    doc = col.find_one({"name":name})
    totalMaleCountPerYear = []
    totalFemaleCountPerYear =[]
    if len(doc['female'])!=0:
        for i in range(1940,2022):
            yearTotal = 0
            for state in doc['female']['state'].keys():
                state_year = doc['female']['state'][state]
                yearTotal += state_year[i-1940];
            totalFemaleCountPerYear.append(yearTotal)
    
    if len(doc['male']) != 0:
        for i in range(1940,2022):
            yearTotal = 0
            for state in doc['male']['state'].keys():
                state_year = doc['male']['state'][state]
                yearTotal += state_year[i-1940];
            totalMaleCountPerYear.append(yearTotal)

    result = {}
    # 남녀 둘 다 있는 경우
    if len(doc['female']) != 0 & len(doc['male'])!= 0:
        result['female'] = totalFemaleCountPerYear
        result['male'] = totalMaleCountPerYear
        return result

    # 남자만 있는 경우
    elif len(doc['female']) == 0 & len(doc['male']) != 0:
        result['female'] = []
        result['male'] = totalMaleCountPerYear
        return result

    else:
        result['female'] = totalFemaleCountPerYear
        result['male'] = totalMaleCountPerYear
        return result
