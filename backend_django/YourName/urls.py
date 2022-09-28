from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include
from RecName.views import NameList
from FinalReport.views import GetReport
from LoadingLabeling.views import Labeling
from ValidateName.views import ValidateName

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rec/', include('RecName.urls')),
    path('report/<str:name>/<int:birth>', GetReport.as_view()),
    path('validate/<str:name>/<int:birth>',ValidateName.as_view()),
    path('loading/',Labeling.as_view())
]
