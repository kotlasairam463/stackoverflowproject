package com.example.stackoverflow.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="solutions")
public class Solutions {
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	
	@Id
	private int id;
private String qid;
private String code;
private int votes;

public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
public int getVotes() {
	return votes;
}
public void setVotes(int votes) {
	this.votes = votes;
}
public String getQid() {
	return qid;
}
public void setQid(String qid) {
	this.qid = qid;
}
public String getCode() {
	return code;
}
public void setCode(String code) {
	this.code = code;
}


}
