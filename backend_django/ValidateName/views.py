from django.shortcuts import render
from rest_framework.views import APIView


from .validate import *
from django.http import JsonResponse
import json
# Create your views here.
class ValidateName(APIView):
    def get(self,request, **kwargs):
        result = CheckName(kwargs["name"],kwargs["birth"])
        fail = "해당 이름의 데이터가 없습니다."
        if not result:
            return JsonResponse(fail, safe=False)
        else:
            successData = json.dumps(result)
            return JsonResponse(successData, safe=False)
