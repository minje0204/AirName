from django.contrib import admin
from django.urls import path
from RecName.views import NameList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rec/', NameList.as_view())
]
