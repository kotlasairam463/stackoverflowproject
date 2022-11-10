package com.example.stackoverflow.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor



@Document(collection="questions")

public class Questions {
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	@Id
	
	private int id;
	private int views;
private String question;
private String description;
private String code;
//private String tag;
private String[] tags;
private String email;


public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}


public int getViews() {
	return views;
}
public void setViews(int views) {
	this.views = views;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getQuestion() {
	return question;
}
public void setQuestion(String question) {
	this.question = question;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getCode() {
	return code;
}
public void setCode(String code) {
	this.code = code;
}
//public String getTag() {
//	return tag;
//}
//public void setTag(String tag) {
//	this.tag = tag;
//}
public String[] getTags() {
	return tags;
}
public void setTags(String s1) {
	this.tags = s1.split("\\s");
}


}

