package com.ssafy.whatsyourname.Domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@Document(collection = "result")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Result {
    @Id
    private ObjectId id;
    private String name;
    private Gender female;
    private Gender male;

    @Builder
    public Result(String name, Gender female, Gender male) {
        this.name = name;
        this.female = female;
        this.male = male;
    }
}
