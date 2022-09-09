import requests
from bs4 import BeautifulSoup

nameAttributes = {}
GirlNames=set()
BoyNames=set()
searchUrl = 'https://www.familyeducation.com/baby-names/generator?'

def AddNameList(attributes,gender):
    url = searchUrl+'attributes='+attributes+'&gender='+gender
    response = requests.get(url)

    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        nameList = soup.select_one('ul.baby-renames-list')
        names = nameList.select('a')
        for name in names:
            name = name.get_text()
            if name in nameAttributes:
                nameAttributes[name].add(attributes)
            else:
                nameAttributes[name] = set([attributes])

            if gender == 'F':
                GirlNames.add(name)
            else:
                BoyNames.add(name)

    else:
        print(response.status_code)

def WriteCsv():
    f = open('name.csv', 'w',encoding="UTF-8")
    f.write('이름,성별,특징\n')
    for k,v in nameAttributes.items():
        gender = 'U'
        if k in GirlNames and k in BoyNames:
            gender = 'U'
        elif k in GirlNames:
            gender = 'F'
        elif k in BoyNames:
            gender = 'M'
        f.write(k + ',' +gender+',')
        for attr in nameAttributes[k]:
            f.write(attr+',')
        f.write('\n')
    f.close()

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    AddNameList('Beautiful','F')
    AddNameList('Brave','F')
    AddNameList('Bright', 'F')
    AddNameList('Cheerful', 'F')
    AddNameList('Courageous', 'F')
    AddNameList('Christian', 'F')
    AddNameList('Creative', 'F')
    AddNameList('Dark', 'F')
    AddNameList('Elegant', 'F')
    AddNameList('Fair', 'F')
    AddNameList('Funny', 'F')
    AddNameList('Generous', 'F')
    AddNameList('Gentle', 'F')
    AddNameList('Godly', 'F')
    AddNameList('Graceful', 'F')
    AddNameList('Great', 'F')
    AddNameList('Handsome', 'F')
    AddNameList('Happy', 'F')
    AddNameList('Illustrious', 'F')
    AddNameList('Intelligent', 'F')
    AddNameList('Joyful', 'F')
    AddNameList('Kind', 'F')
    AddNameList('Loving', 'F')
    AddNameList('Manly', 'F')
    AddNameList('Merciful', 'F')
    AddNameList('Noble', 'F')
    AddNameList('Old-fashioned', 'F')
    AddNameList('Peaceful', 'F')
    AddNameList('Powerful', 'F')
    AddNameList('Pretty', 'F')
    AddNameList('Protector', 'F')
    AddNameList('Pure', 'F')
    AddNameList('Queenly', 'F')
    AddNameList('Reborn', 'F')
    AddNameList('Scholar', 'F')
    AddNameList('Smart', 'F')
    AddNameList('Strong', 'F')
    AddNameList('Warrior', 'F')
    AddNameList('Wide', 'F')
    AddNameList('Wild', 'F')
    AddNameList('Winner', 'F')
    AddNameList('Wise', 'F')

    AddNameList('Beautiful', 'M')
    AddNameList('Brave', 'M')
    AddNameList('Bright', 'M')
    AddNameList('Cheerful', 'M')
    AddNameList('Courageous', 'M')
    AddNameList('Christian', 'M')
    AddNameList('Creative', 'M')
    AddNameList('Dark', 'M')
    AddNameList('Elegant', 'M')
    AddNameList('Fair', 'M')
    AddNameList('Funny', 'M')
    AddNameList('Generous', 'M')
    AddNameList('Gentle', 'M')
    AddNameList('Godly', 'M')
    AddNameList('Graceful', 'M')
    AddNameList('Great', 'M')
    AddNameList('Handsome', 'M')
    AddNameList('Happy', 'M')
    AddNameList('Illustrious', 'M')
    AddNameList('Intelligent', 'M')
    AddNameList('Joyful', 'M')
    AddNameList('Kind', 'M')
    AddNameList('Loving', 'M')
    AddNameList('Manly', 'M')
    AddNameList('Merciful', 'M')
    AddNameList('Noble', 'M')
    AddNameList('Old-fashioned', 'M')
    AddNameList('Peaceful', 'M')
    AddNameList('Powerful', 'M')
    AddNameList('Pretty', 'M')
    AddNameList('Protector', 'M')
    AddNameList('Pure', 'M')
    AddNameList('Queenly', 'M')
    AddNameList('Reborn', 'M')
    AddNameList('Scholar', 'M')
    AddNameList('Smart', 'M')
    AddNameList('Strong', 'M')
    AddNameList('Warrior', 'M')
    AddNameList('Wide', 'M')
    AddNameList('Wild', 'M')
    AddNameList('Winner', 'M')
    AddNameList('Wise', 'M')

    WriteCsv()



