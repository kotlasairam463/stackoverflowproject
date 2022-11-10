package com.example.stackoverflow.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="companies")
public class Companies {
	
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	@Id
	int id;
private String img;
private String name;
private String position;
private String location;
private String[] skills;
private int vacancies;


public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPosition() {
	return position;
}
public void setPosition(String position) {
	this.position = position;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String[] getSkills() {
	return skills;
}
public void setSkills(String s1) {
	this.skills = s1.split("\\s");
}
public int getVacancies() {
	return vacancies;
}
public void setVacancies(int vacancies) {
	this.vacancies = vacancies;
}

}
