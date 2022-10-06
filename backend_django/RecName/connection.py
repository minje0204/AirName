import pandas as pd
import environ
from pymongo import MongoClient

def ConnectMongoDB():
    #mongoDB 연결객체 생성
    env = environ.Env()
    environ.Env.read_env()
    client = MongoClient('mongodb://%s:%s@airname.shop:27017' % (env('DATABASE_USER'), env('DATABASE_PASS')))
    # client = MongoClient(host='localhost', port=27017)
    db = client['airnameDB']
    return db

def LoadDataframes(db, collection_name):
    cursor = db[collection_name].find()
    df = pd.DataFrame(list(cursor))
    # _id 컬럼 삭제
    del df['_id']
    return df

def LoadNewDataframes(db, collection_name):
    cursor = db[collection_name].find()
    df = pd.DataFrame(list(cursor))
    # _id 컬럼 삭제
    del df['_id']
    # level_0 컬럼 삭제
    del df['level_0']
    return df

def SaveDataframes(db, dataframes, collection_name):
    collection = db[collection_name]
    dataframes.reset_index(inplace=True)
    dataframes_dict = dataframes.to_dict("records")
    collection.insert_many(dataframes_dict)
