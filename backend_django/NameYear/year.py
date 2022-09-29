import pandas as pd
from pymongo import MongoClient
from RecName.connection import *
def NameYear(name):
    db = ConnectMongoDB()

    col = db['rawdata']
    doc = col.find_one({"name":name})