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


import com.example.stackoverflow.model.Solutions;

import com.example.stackoverflow.repository.SolutionsRepository;
import com.example.stackoverflow.service.SequenceGeneratorService;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class SolutionController {
	@Autowired
	private SolutionsRepository repository;
	
	@Autowired
	private SequenceGeneratorService service;
	@PostMapping("/addsolution")
	public void add(@RequestBody Solutions solution) {
		solution.setId(service.getSequenceNumber(Solutions.SEQUENCE_NAME));
		repository.save(solution);
		
	}
	@GetMapping("/solutions")
	public List<Solutions> getSolutions(){
		return repository.findAll();
	}
	
	@PutMapping("/updateSolById/{id}")
	public void updatevotecount(@PathVariable int id,@RequestBody Solutions updatedSolution) {
		 Optional<Solutions>oldSolutions=this.repository.findById(id);
		 Solutions oldsolution = oldSolutions.get();
		 oldsolution.setVotes(updatedSolution.getVotes());
		 repository.save(oldsolution);
	}
	
}
