package com.ssafy.whatsyourname.Dto;

import com.ssafy.whatsyourname.Domain.Gender;
import com.ssafy.whatsyourname.Domain.Result;
import com.ssafy.whatsyourname.DtoConverter.DtoToResponse;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ResponseResultDto {

    private String name;
    private Gender female;
    private Gender male;

    public ResponseResultDto (Result result){
        this.name = result.getName();
        this.female = result.getFemale();
        this.male = result.getMale();
    }

}
