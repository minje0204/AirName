# Generated by Django 4.1.1 on 2022-09-12 16:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('RecName', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='namedata',
            name='number',
        ),
    ]