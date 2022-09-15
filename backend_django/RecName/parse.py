#json파일을 데이터프레임으로 파싱하는 파일
import pandas as pd
import os
import jellyfish

DATA_DIR = "../DataName"
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")

def DumpDataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)

def NysiisCode(name):
    name = jellyfish.nysiis(name)
    return name


def main():
    df = pd.read_json('../DataName/mvpNameSet_normal.json')

    #json파일에서 name column만 가져오는 새로운 DataFrame 생성
    df_name = df.filter(['name'], axis=1)

    #DataFrame에 Nysiis 컬럼 추가
    df_name['nysiis'] = df_name['name'].apply(NysiisCode)

    #DataFrame을 pickle 파일로 저장해 다른 py파일에서 사용가능하도록 함
    DumpDataframes(df_name)

if __name__ == '__main__':
    main()
