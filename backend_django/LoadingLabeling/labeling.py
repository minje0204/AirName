import pandas as pd
from pymongo import MongoClient
import random
import math

def ConnectMongoDB():
    # mongoDB 연결객체 생성
    client = MongoClient(host='localhost', port=27017)
    db = client['airnameDB']
    return db


def LoadDataframes(db, collection_name):
    cursor = db[collection_name].find()
    df = pd.DataFrame(list(cursor))
    # _id 컬럼 삭제
    del df['_id']
    return df


def GetRandomName():
    db = ConnectMongoDB()
    df = LoadDataframes(db, 'rawdata')

    
    report = {}
    random_data = df.sample(n=1)
    
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
    report['name'] =random_name
    report['gender'] = random_gender
    report['attribute_name'] = [attribute_left,attribute_right]
    report['attribute_percentage'] = [left_percent,right_percent]

    return report

