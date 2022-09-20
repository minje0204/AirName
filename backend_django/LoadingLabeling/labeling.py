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

    korean_attribute={
'Masculine':'남성적인',
'Feminine':'여성적인',
'Classic':'고전적인',
'Modern':'현대적인',
'Mature':'성숙한',
'Youthful':'앳된',
'Formal':'격식 있는',
'Informal':'자유로운',
'Upper Class':'상류층의',
'Common':'대중적인',
'Urban':'도시적인',
'Natural':'자연친화적인',
'Wholesome':'신중한',
'Devious':'충동적인',
'Strong':'강한',
'Delicate':'섬세한',
'Refined':'세련된',
'Rough':'거친',
'Strange':'특이한',
'Boring':'평범한',
'Simple':'단순한',
'Complex':'복잡한',
'Serious':'진지한',
'Comedic':'웃긴'}
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
    report['attribute_name'] = [korean_attribute[attribute_left],korean_attribute[attribute_right]]
    report['attribute_percentage'] = [left_percent,right_percent]

    return report

