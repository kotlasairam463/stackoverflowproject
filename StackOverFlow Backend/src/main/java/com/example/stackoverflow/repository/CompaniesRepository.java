package com.example.stackoverflow.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.stackoverflow.model.Companies;

public interface CompaniesRepository extends MongoRepository<Companies,Integer> {

}
