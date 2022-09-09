import requests
import json
from bs4 import BeautifulSoup

originUrl = 'https://www.behindthename.com'
data =[]

def GetGendernUsage(url):
    response = requests.get(url)
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')

        # Gender
        gender = 'n'
        male = soup.select_one('span.infoname-info > span.masc')
        female = soup.select_one('span.infoname-info > span.fem')
        if str(male) != 'None' and str(female) != 'None':
            gender.append('U')
        elif str(female) != 'None':
            gender.append('F')
        elif str(male) != 'None':
            gender.append('M')

        usage = []
        usages = soup.select('a.usg')
        for u in usages:
            usage.append(u.get_text())

        return gender, usage
    else:
        print(response.status_code)


def GetNameRating(url):  # 이름 하나당 레이팅 값
    # url='https://www.behindthename.com/name/quinti10n/rating'
    url='https://www.behindthename.com/name/adam/rating'
    response = requests.get(url)

    attribute = [
        {"A Good Name": 0, "A Bad Name": 0},
        {"Masculine": 0, "Feminine": 0},
        {"Classic": 0, "Modern": 0},
        {"Mature": 0, "Youthful": 0},
        {"Formal": 0, "Informal": 0},
        {"Upper Class": 0, "Common": 0},
        {"Urban": 0, "Natural": 0},
        {"Wholesome": 0, "Devious": 0},
        {"Strong": 0, "Delicate": 0},
        {"Refined": 0, "Rough": 0},
        {"Strange": 0, "Boring": 0},
        {"Simple": 0, "Complex": 0},
        {"Serious": 0, "Comedic": 0},
        {"Nerdy": 0, "Unintellectual": 0}
    ]

    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        table = soup.select_one('center > table')
        humanCount = soup.select_one('center > p')

        slicing = humanCount.get_text()[:31]

        cnt = slicing[-5:]
        cnt = cnt.replace(',', "")
        cnt = int(cnt)

        if str(table) != 'None':  # Rating 데이터 없음
            tableRow = table.select('tr')
            index = 0
            for tr in tableRow:
                left = tr.select_one('td:first-child > span').get_text()
                leftPoint = tr.select_one('td:nth-child(2n) > span').get_text()
                right = tr.select_one('td:last-child > span').get_text()
                rightPoint = tr.select_one('td:nth-child(4n) > span').get_text()

                leftPoint = int(leftPoint[:-1])
                rightPoint = int(rightPoint[:-1])
                leftHuman = round(cnt * leftPoint * 0.01)
                rightHuman = round(cnt * rightPoint * 0.01)

                attribute[index][left]=leftHuman
                attribute[index][right] = rightHuman

    else:
        print(response.status_code)

    return attribute


def PageByPageNum():
    with open('nameHref.json', 'r') as f:
        nameSet = json.load(f)

    for set in nameSet:
        url = 'https://www.behindthename.com/names/usage/english'+set['link']
        gender, usage = GetGendernUsage(url)
        attribute = GetNameRating(url+'/rating')
        data.append({
            'name': set['name'],
            'gender': gender,
            'usage': usage,
            'attribute': attribute
        })
        print(set['name'])


def WriteData():
    fileName = "mvpNameSet_ver1.json"
    file = open(fileName, "w")
    json.dump(data, file)
    file.close()

# Press the green button in the gutter to run the script.

if __name__ == '__main__':
    PageByPageNum()


    WriteData()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
