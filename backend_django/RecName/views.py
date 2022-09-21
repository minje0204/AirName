import json

from django.shortcuts import render
from rest_framework.response import Response
from .models import NameData
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .serializers import RecSerializer
from .rec import *

# class NameListAPI(APIView):
#     def get(self, request):
#         queryset = NameData.objects.all()
#         print(queryset)
#
#         KorName = request.GET.get('KorName', None)
#
#         serializer = RecSerializer(queryset, many=True)
#         return Response(serializer.data)

# 이름 유효성 검사용 API 검사해야됨!!
# class NameList(APIView):
#     def post(self, request):
#         #Json 파일로 받아야 하지만 테스트를 위해 현재 한글이름 string값 받아서 처리하도록 함
#         sound_arr = Recommend(request.data['name'], request.data['gender'], request.data['birth'])
#
#
#         if arr == 'name error':
#             return JsonResponse({"error": "이름 형식에 오류가 있습니다."}, status=500)
#
#         else :
#             data = json.dumps(arr)
#
#             return JsonResponse(data, safe=False)

class NameList(APIView):
    def post(self, request):
        #분위기 추천
        atm_arr = AtmRecommend(request.data['attr'])
        #발음 추천
        sound_arr = Recommend(request.data['name'], request.data['gender'], request.data['birth'])

        print(sound_arr)
        print(atm_arr)
        result_arr = NameFormating(atm_arr,sound_arr)
        data = json.dumps(result_arr)

        return JsonResponse(data, safe=False)

