package com.example.stackoverflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.stackoverflow.model.Applicants;
import com.example.stackoverflow.repository.ApplicantsRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class ApplicantsController {
	@Autowired
	private ApplicantsRepository repository;
	@PostMapping("/addapplicant")
	public void add(@RequestBody Applicants Applicant) {
		repository.save(Applicant);
	}

}
