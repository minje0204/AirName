package com.ssafy.whatsyourname.Dto;

import com.ssafy.whatsyourname.Domain.Gender;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ResponseGenderDto {

    private List<String> usages = new ArrayList<>();
    private String meaning;
    private HashMap<String, List<Integer>> ResponseStates = new HashMap<>();
    private HashMap<String, Integer> ResponseAttributes = new HashMap<>();

    public ResponseGenderDto(Gender gender){
        this.usages = gender.getUsage();
        this.meaning = gender.getMeaning();
        this.ResponseStates = gender.getState();
        this.ResponseAttributes = gender.getAttribute();
    }
}
