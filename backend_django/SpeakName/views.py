from django.shortcuts import render
from django.http import StreamingHttpResponse
from django.http import HttpResponse
from rest_framework.views import APIView
import os
from gtts import gTTS

class SpeakName(APIView):
    def get(self, request, **kwargs):
        name = kwargs['name']
        filepath = os.getcwd()
        filename = name + '.mp3'

        tts = gTTS(
            text=name,
            lang='en', slow=False
        )

        streaming = tts.stream()
        response = HttpResponse(streaming,status=200)

        # response = StreamingHttpResponse(self.iteration(filename,0), status=200)

        response['Cache-Control'] = 'no-cache'
        response['Content-Type'] = 'audio/mp3'

        return response

    #mp3 스트리밍 처리
    # def iteration(self, path, time):
    #     f = open(path, 'rb+')
    #     while True:
    #         c = f.read(512)
    #         if c:
    #             yield c
    #         else:
    #             break
    #
    #     #파일 끝까지 읽으면 파일삭제
    #     os.remove(path)
