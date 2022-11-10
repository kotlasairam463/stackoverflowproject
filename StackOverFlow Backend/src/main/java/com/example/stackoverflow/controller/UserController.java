package com.example.stackoverflow.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.stackoverflow.model.User;
import com.example.stackoverflow.repository.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class UserController {
@Autowired
private UserRepository repository;
@PostMapping("/adduser")
public String add(@RequestBody User user) {
	repository.save(user);
	return "user added";
}

@GetMapping("/users")
public List<User> getUsers(){
	return repository.findAll();
}

@PutMapping("/user/{email}")
public void updated(@PathVariable String email,@RequestBody User updateduser) {
	Optional<User>oldUsers=this.repository.findByEmail(email);
	 User oldUser = oldUsers.get();
	 oldUser.setPassword(updateduser.getPassword());
	repository.deleteByEmail(email);
	repository.save(oldUser);
}
}
