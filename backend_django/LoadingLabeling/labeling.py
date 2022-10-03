from re import S
import pandas as pd
from pymongo import MongoClient
import random
import environ
import time
from RecName.connection import *


def GetRandomName():
    start = time.time()
    db = ConnectMongoDB()
    connectionTime = time.time()-start
    start = time.time()
    col = db['rawdata']
    toDBTime = time.time()-start
    start = time.time()

    report = {}
    random_data = pd.DataFrame(col.aggregate([{'$sample': { 'size': 1 } } ]))
    randomTime = time.time()-start
    start = time.time()
    for data in random_data.itertuples():
        random_name = data.name

        if (len(data.female)!=0 and len(data.male)!=0):
            random_gender = random.choice(['M','F'])
        else :
            if (len(data.female)==0):
                random_gender = 'M'
            elif (len(data.male)==0):
                random_gender = 'F'

        if random_gender == 'M':
            random_attribute = (data.male['attribute'])
        elif random_gender == 'F':
            random_attribute = (data.female['attribute'])

    random_key = list(random_attribute.keys())[2:-2]

    choice = random.choice(random_key)

    choice_index = random_key.index(choice)
    
    if choice_index%2==0:
        attribute_left = random_key[choice_index]
        attribute_right = random_key[choice_index+1]
    else:
        attribute_right = random_key[choice_index]
        attribute_left = random_key[choice_index-1]
    
    left_percent = round(random_attribute[attribute_left]/(random_attribute[attribute_left]+random_attribute[attribute_right])*100)
    right_percent = round(random_attribute[attribute_right]/(random_attribute[attribute_left]+random_attribute[attribute_right])*100)
    operationTime =time.time()-start

    report['name'] =random_name
    report['gender'] = random_gender
    report['attribute_name'] = [attribute_left,attribute_right]
    report['attribute_percentage'] = [left_percent,right_percent]
    report['time']=[connectionTime,toDBTime,randomTime,operationTime]

    return report


def SetNameAttribute(name, gender, attr):
    db = ConnectMongoDB()
    col = db['rawdata']
    doc = col.find_one({"name":name})

    if gender == 'M' :
        gender = 'male'
    elif gender == 'F' :
        gender = 'female'

    doc_attr = doc[gender]['attribute'][attr]
    doc[gender]['attribute'][attr] = doc_attr+1

    col.update_one(
        {
            "_id": doc['_id']
        },
        {
            "$set": {
                gender : doc[gender]
            }
        }
    )
