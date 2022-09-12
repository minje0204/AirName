package com.ssafy.whatsyourname.Repository;

import com.ssafy.whatsyourname.Model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    public List<Customer> findByFirstName(String firstName);
}