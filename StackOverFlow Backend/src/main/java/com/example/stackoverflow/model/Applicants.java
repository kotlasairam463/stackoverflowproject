package com.example.stackoverflow.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="applicants")
public class Applicants {
	private String name;
	private String email;
	private String company;
	private String linkedin;
	private String[] skills;
	private int year;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getLinkedin() {
		return linkedin;
	}
	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}
	public String[] getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills.split("\\s");
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	
	
}
