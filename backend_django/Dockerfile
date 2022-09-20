FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

#WORKDIR /django
#COPY requirements.txt /django/
#RUN pip install -r requirements.txt
#COPY . /django/
#
#EXPOSE 8000
##CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD ["gunicorn", "--bind", "0.0.0.0:8000", "YourName.wsgi:application"]

RUN apt-get -y update && apt-get -y install vim && apt-get clean
RUN mkdir /project
ADD . /project

WORKDIR /project
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000
--access-logfile access.log --error-logfile error.log
CMD ["gunicorn", "--bind", "0.0.0.0:8000","--access-logfile","access.log","--error-logfile","error.log","YourName.wsgi:application"]
