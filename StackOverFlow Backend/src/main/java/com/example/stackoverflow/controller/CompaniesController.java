package com.example.stackoverflow.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.stackoverflow.model.Companies;
import com.example.stackoverflow.model.Questions;
import com.example.stackoverflow.repository.CompaniesRepository;
import com.example.stackoverflow.service.SequenceGeneratorService;
@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class CompaniesController {
	@Autowired
	private SequenceGeneratorService service;
@Autowired
private CompaniesRepository repository;
@GetMapping("/company")
public List<Companies> getUsers(){
	return repository.findAll();
}
@PostMapping("/s")
public void add(@RequestBody Companies company) {
	company.setId(service.getSequenceNumber(Questions.SEQUENCE_NAME));
	repository.save(company);
	
}
@DeleteMapping("/deletecompany/{id}")
public void deleteCompany(@PathVariable int id) {
	repository.deleteById(id);
}

}






