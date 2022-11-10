package com.example.stackoverflow.repository;


import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.stackoverflow.model.User;

public interface UserRepository extends MongoRepository<User,String> {

	Optional<User> findByEmail(String email);

	void deleteByEmail(String email);

}
