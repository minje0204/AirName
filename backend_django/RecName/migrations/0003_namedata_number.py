# Generated by Django 4.1.1 on 2022-09-12 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RecName', '0002_remove_namedata_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='namedata',
            name='number',
            field=models.IntegerField(default=0),
        ),
    ]
