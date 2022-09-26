import json

from django.shortcuts import render
from rest_framework.response import Response
from .models import NameData
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .serializers import RecSerializer
from .rec import *
from .utils import *
from rest_framework import exceptions

# class NameListAPI(APIView):
#     def get(self, request):
#         queryset = NameData.objects.all()
#         print(queryset)
#
#         KorName = request.GET.get('KorName', None)
#
#         serializer = RecSerializer(queryset, many=True)
#         return Response(serializer.data)

class NameList(APIView):
    def post(self, request):
        #발음 추천
        sound_arr = Recommend(request.data['name'], request.data['gender'], request.data['birth'])

        #로마자 변환 불가능한 이름이 입력되면 NameUnavailable에러를 발생
        if sound_arr == 404:
            raise NameUnavailable()

        #분위기 추천
        atm_arr = AtmRecommend(request.data['attr'])

        #리스트의 dict화
        result_arr = NameFormating(atm_arr,sound_arr)

        #dict를 json으로 변환
        data = json.dumps(result_arr)

        return JsonResponse(data, safe=False)

