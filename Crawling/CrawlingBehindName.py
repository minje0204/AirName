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
        gender = []
        male = soup.select_one('span.infoname-info > span.masc')
        female = soup.select_one('span.infoname-info > span.fem')
        if str(male) != 'None':
            gender.append('M')
        if str(female) != 'None':
            gender.append('F')

        usage = []
        usages = soup.select('a.usg')
        for u in usages:
            usage.append(u.get_text())

        return gender, usage
    else:
        print(response.status_code)


def GetNameRating(url):  # 이름 하나당 레이팅 값
    # url='https://www.behindthename.com/name/quinti10n/rating'
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

        if str(table) != 'None':  # Rating 데이터 없음
            tableRow = table.select('tr')
            index=0
            for tr in tableRow:
                left = tr.select_one('td:first-child > span').get_text()
                leftPoint = tr.select_one('td:nth-child(2n) > span').get_text()
                right = tr.select_one('td:last-child > span').get_text()
                rightPoint = tr.select_one('td:nth-child(4n) > span').get_text()

                leftPoint = int(leftPoint[:-1])
                rightPoint = int(rightPoint[:-1])

                attribute[index][left]=leftPoint
                attribute[index][right] = rightPoint

    else:
        print(response.status_code)

    return attribute


def InnerPage(response):  # 쪽수 하나에 있는 모든 이름들 돌기
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    names = soup.select('span.listname > a')
    for name in names:
        gender, usage = GetGendernUsage(originUrl + name['href'])

        attribute = GetNameRating(originUrl + name['href'] + '/rating')

        data.append({
            'name': name.get_text(),
            'gender': gender,
            'usage': usage,
            'attribute': attribute
        })
        print(name.get_text())

def PageByPageNum():

    url = 'https://www.behindthename.com/names/usage/english'
    response = requests.get(url)

    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        pages = soup.select_one('div.pgblurb').get_text()

        InnerPage(response)
        for i in range(2, int(pages[-1:])+1):
            response = requests.get(url + '/' + str(i))
            InnerPage(response)

# def PageByAlpahbet(alphabet):
#     url = 'https://www.behindthename.com/names/letter/' + alphabet
#     response = requests.get(url)
#
#     if response.status_code == 200:
#         html = response.text
#         soup = BeautifulSoup(html, 'html.parser')
#         pages = soup.select_one('div.pgblurb').get_text()
#
#         if 'page' in pages:  # 쪽수만큼 돌려야함
#             InnerPage(response)
#             PageByPageNum(url, int(pages[-1:]))
#             # print(int(pages[-1:]))
#         else:  # 해당 페이지만 돌리면 됨
#             InnerPage(response)
#
#     else:
#         print(response.status_code)

def WriteData():
    fileName = "my-data.json"
    file = open(fileName, "w")
    json.dump(data, file)
    file.close()

if __name__ == '__main__':
    PageByPageNum()

    WriteData()
    print(data)

