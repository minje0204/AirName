#json파일을 데이터프레임으로 파싱하는 파일
import pandas as pd
import os
import jellyfish

def Directory(dir):
    filename = dir + ".pkl"
    DATA_DIR = "../DataName"
    DUMP_FILE = os.path.join(DATA_DIR, filename)
    return DUMP_FILE

def DumpDataframes(dataframes, filename):
    pd.to_pickle(dataframes, Directory(filename))

def LoadDataframes(filename):
    return pd.read_pickle(Directory(filename))

def NysiisCode(name):
    name = jellyfish.nysiis(name)
    return name


def main():
    df = pd.read_json('../DataName/mvpNameSet_Behind_Fin_with_count_state.json')

    #json파일에서 name column만 가져오는 새로운 DataFrame 생성
    #df_name = df.filter(['name'], axis=1)

    #data의 이름 컬럼을 numpy배열로 가져옴
    names = df['name'].to_numpy()

    code_table = [] #발음코드 데이터프레임 생성을 위한 테이블
    year_table = [] #연도 데이터프레임 생성을 위한 테이블
    code_columns = ( #발음코드 데이터프레임 생성을 위한 컬럼
        "name", #이름
        "gender", #성별
    )
    year_columns = ( #연도 데이터프레임 생성을 위한 컬럼
        1941+i for i in range(82) #연도
    )

    #발음코드 데이터프레임 생성
    for data in df.itertuples():
        
        #성별 컬럼 추가를 위한 작업
        if len(data.female) == 0:
            gender = 'M'
        else :
            if len(data.male) == 0:
                gender = 'F'
            else :
                gender = 'U'

        code_table.append(
            [
                data.name,
                gender,
            ]
        )
        
    #연도 데이터프레임 생성
    for data in df.itertuples():
        year = [0 for i in range(82)]

        if len(data.female) != 0:
            for state in data.female['state']:
                state_year = data.female['state'][state]
                new_year = [year[i]+state_year[i] for i in range(len(year))]
                year = new_year

        if len(data.male) != 0:
            for state in data.male['state']:
                state_year = data.male['state'][state]
                new_year = [year[i]+state_year[i] for i in range(len(year))]
                year = new_year

        year_table.append(year)

    df_code = pd.DataFrame(data=code_table, columns=code_columns)
    df_year = pd.DataFrame(data=year_table, columns=year_columns)

    #발음코드 데이터프레임에 nysiis 컬럼 추가
    df_code['nysiis'] = df_code['name'].apply(NysiisCode)
    df_year.insert(0,'name',names)

    #DataFrame을 pickle 파일로 저장해 다른 py파일에서 사용가능하도록 함
    DumpDataframes(df_code,"code_dump")
    DumpDataframes(df_year,"year_dump")

if __name__ == '__main__':
    main()
