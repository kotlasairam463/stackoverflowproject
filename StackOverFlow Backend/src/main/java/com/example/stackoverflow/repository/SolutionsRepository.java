package com.example.stackoverflow.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.stackoverflow.model.Solutions;

public interface SolutionsRepository extends MongoRepository<Solutions,Integer>{

}
