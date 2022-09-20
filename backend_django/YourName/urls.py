from django.contrib import admin
from django.urls import path
from RecName.views import NameList
from FinalReport.views import GetReport


urlpatterns = [
    path('admin/', admin.site.urls),
    path('rec/sound/', NameList.as_view()),
    path('report/<str:name>/<str:gender>/<int:birth>', GetReport.as_view())
]
