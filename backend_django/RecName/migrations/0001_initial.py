# Generated by Django 4.1.1 on 2022-09-12 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NameData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('gender', models.CharField(max_length=2)),
                ('number', models.IntegerField(max_length=7)),
                ('nysiis', models.CharField(max_length=30)),
            ],
        ),
    ]