from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include
from NameYear.views import GetNamePerYearList
from FinalReport.views import GetReport
from LoadingLabeling.views import Labeling
from SpeakName.views import SpeakName
from ValidateName.views import ValidateName
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rec/', include('RecName.urls')),
    path('report/<str:name>/<int:birth>', GetReport.as_view()),
    path('validate/<str:name>/<int:birth>',ValidateName.as_view()),
    path('loading/',Labeling.as_view()),
    path('speaking/<str:name>',SpeakName.as_view()),
    path('year/<str:name>', GetNamePerYearList.as_view())
]


if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]