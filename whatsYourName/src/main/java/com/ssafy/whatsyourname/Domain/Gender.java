package com.ssafy.whatsyourname.Domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Getter
@Document(collection = "gender")
public class Gender {

    private List<String> usage = new ArrayList<>();
    private String meaning;
    private HashMap<String, Integer> attribute = new HashMap<>();
    private HashMap<String, List<Integer>> state = new HashMap<>();

    @Builder
    public Gender(List<String> usage, String meaning,HashMap<String, Integer> attribute, HashMap<String, List<Integer>> state) {
        this.usage = usage;
        this.meaning = meaning;
        this.attribute = attribute;
        this.state = state;
    }
}
