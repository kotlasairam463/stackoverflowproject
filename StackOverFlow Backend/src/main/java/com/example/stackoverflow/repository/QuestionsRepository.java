package com.example.stackoverflow.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.stackoverflow.model.Questions;

public interface QuestionsRepository extends MongoRepository<Questions,Integer> {

}
