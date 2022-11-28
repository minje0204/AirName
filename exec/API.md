# 리드미용 API 명세서

| 이름 | Method | Label | 담당자 | URL | Request | Response |
| --- | --- | --- | --- | --- | --- | --- |
| SoundName | POST | recommendation | 김상협, 조민제 | /rec/sound | {<br>”name” : “”, <br>”gender”:””,<br>  ”birth”:””,<br>”attr”: {<br>      “설문조사 컬럼들”:” ”,<br>      …<br>   }<br>} | {<br>”추천이름1”:”atm”,<br>”추천이름2”:”atm”,<br>”추천이름3”:”sound”,<br>”추천이름4”:”sound”,<br>} |
| CheckName | GET | recommendation | 김상협 | /rec/check/{name} |  | {<br>   check:”True or False 반환”<br>} |
| ReportData | GET | name | 윤여빈 | /report/{name}/{birth} | {<br>     “name” : “”,<br>     “birth” : 0<br>} | {<br>    “female”: {<br>         meaning: “ “,<br>          state: “”<br>}  ,<br>    “male” : , {<br>          meaning: “ “,<br>          state: “”<br>     }<br>} |
| ValidateName | GET | name | 윤여빈 | /validate/{name}/{birth} | {<br>     “name” : “”,<br>     “birth” : 0<br>} | 성공 시<br>{<br>    “female”: {<br>         meaning: “ “,<br>          state: “”<br>}  ,<br>    “male” : , {<br>          meaning: “ “,<br>          state: “”<br>     }<br>}<br> 실패 시<br>”해당 이름의 데이터가 없습니다.” |<br>| NameYear | GET | name | 윤여빈 | /year/{name} | {<br>     ‘name’ : ‘’<br>}<br> | {<br>     ‘female’ : [],<br>      ‘male’: []<br>} |
| GetRandomName | GET | loading | 전선영 | /loading/ |  | {<br>    "name": "Abbie", <br>    "gender": "F",<br>    "attribute_name": ["Simple", "Complex"],<br>    "attribute_percentage": [72, 28]<br>} |
| setRandonName | PUT | loading | 전선영, 김상협 | /loading/ | {<br>    "name": "Abbie", <br>    "gender": "F",<br>    "attribute": "Simple"<br>} |  |
