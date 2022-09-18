# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
import requests
import json
from bs4 import BeautifulSoup

originUrl = 'https://www.behindthename.com'
nameData = []

def PageByPageNum():
    url = 'https://www.behindthename.com/names/usage/english'

    response = requests.get(url)
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        names = soup.select('span.listname > a')
        for n in names:
            nameData.append({
                'name': n.get_text(),
                'link':n['href']
            })

    for i in range(2, 15):
        response = requests.get(url + '/' + str(i))
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html, 'html.parser')
            names = soup.select('span.listname > a')
            for n in names:
                nameData.append({
                    'name': n.get_text(),
                    'link': n['href']
                })

def WriteData():
    fileName = "nameHref.json"
    file = open(fileName, "w")
    json.dump(nameData, file)
    file.close()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    PageByPageNum()
    # for i in Alpahbet:
    #     print(i)
    #     PageByAlpahbet(i)

    WriteData()
    print(nameData)
    print(len(nameData))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
