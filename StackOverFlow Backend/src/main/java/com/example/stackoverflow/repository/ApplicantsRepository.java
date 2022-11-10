package com.example.stackoverflow.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.stackoverflow.model.Applicants;
public interface ApplicantsRepository extends MongoRepository<Applicants,String> {

}
