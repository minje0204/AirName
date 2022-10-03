from django.shortcuts import render

# Create your views here.
import json

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from .year import GetNamePerYear
class GetNamePerYearList(APIView):
    def get(self,request,**kwargs):
        result = GetNamePerYear(kwargs['name'])
        fail = "해당 데이터가 없습니다"
        if not result:
            return JsonResponse(fail, safe = False)
        else:
            data = json.dumps(result)

            return JsonResponse(data, safe=False)
            

