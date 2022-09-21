package com.ssafy.whatsyourname.Repository;

import com.ssafy.whatsyourname.Domain.Result;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface ResultRepository extends MongoRepository<Result, String> {
    Optional<Result> findByName(String name);
}