from django.contrib import admin
from django.urls import path
from RecName.views import NameList
from FinalReport.views import GetReport
from LoadingLabeling.views import Labeling

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rec/sound/', NameList.as_view()),
    path('report/<str:name>/<int:birth>', GetReport.as_view()),
    path('loading/',Labeling.as_view())
]
