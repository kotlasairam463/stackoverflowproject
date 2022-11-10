package com.example.stackoverflow.controller;

import java.util.Arrays;
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
import com.example.stackoverflow.model.Questions;
import com.example.stackoverflow.repository.QuestionsRepository;
import com.example.stackoverflow.service.SequenceGeneratorService;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class QuestionsController {
@Autowired
private QuestionsRepository repository;
@Autowired
private SequenceGeneratorService service;
@PostMapping("/addquestion")
public void add(@RequestBody Questions question) {
	question.setId(service.getSequenceNumber(Questions.SEQUENCE_NAME));
	repository.save(question);
}
@GetMapping("/questions")
public List<Questions> getQuestions(){
	return repository.findAll();
}
@PutMapping("/updateById/{id}")
public void updateviewcount(@PathVariable int id,@RequestBody Questions updatedQuestion) {
	 Optional<Questions>oldQuestions=this.repository.findById(id);
	 Questions oldquestion = oldQuestions.get();
	 oldquestion.setViews(updatedQuestion.getViews());
//	 oldquestion.setQuestion(updatedQuestion.getQuestion());
//	 oldquestion.setDescription(updatedQuestion.getDescription());
//	 oldquestion.setCode(updatedQuestion.getCode());
////	 oldquestion.setTags(Arrays.toString(updatedQuestion.getTags()));
//	 oldquestion.setEmail(updatedQuestion.getEmail());
	 repository.save(oldquestion); 
   	   
}
}
