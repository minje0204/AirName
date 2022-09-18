package com.ssafy.whatsyourname.DtoConverter;

import com.ssafy.whatsyourname.Domain.Gender;
import com.ssafy.whatsyourname.Dto.ResponseGenderDto;

public class DtoToResponse {

    public static ResponseGenderDto genderToResponse(Gender gender){
        ResponseGenderDto genderDto = new ResponseGenderDto(gender);
        return genderDto;
    }
}
