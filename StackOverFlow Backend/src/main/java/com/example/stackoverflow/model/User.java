package com.example.stackoverflow.model;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="users")
public class User {
private String fullname;
private String email;
private String password;
public String getFullname() {
	return fullname;
}
public void setFullname(String fullname) {
	this.fullname = fullname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

}

