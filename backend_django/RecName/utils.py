from rest_framework.exceptions import APIException

class NameUnavailable(APIException):
    status_code = 404
    default_detail = '로마자로 변환할 수 없는 이름입니다.'
    default_code = 'romanization_unavailable'