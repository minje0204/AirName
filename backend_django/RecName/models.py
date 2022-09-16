from django.db import models


class NameData(models.Model):
    name = models.CharField(max_length=30)
    gender = models.CharField(max_length=2)
    number = models.IntegerField(default=0)
    nysiis = models.CharField(max_length=30)

    def __str__(self):
        return self.name
