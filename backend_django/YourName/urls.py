from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include
from RecName.views import NameList
from FinalReport.views import GetReport
from LoadingLabeling.views import Labeling

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rec/', include('RecName.urls')),
    path('report/<str:name>/<str:gender>/<int:birth>', GetReport.as_view()),
    path('loading/',Labeling.as_view())
]
