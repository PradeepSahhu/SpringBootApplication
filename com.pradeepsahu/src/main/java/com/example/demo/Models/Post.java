package com.example.demo.Models;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "JobPost")
public class Post {
	



	private String role;
    private String description;
    private String experience;
    private String skills[];

    public Post() {
    }

    public Post( String role, String description, String experience, String[] skills) {

        this.role = role;
        this.description = description;
        this.experience = experience;
        this.skills = skills;
    }

    public String getrole() {
        return role;
    }

    public void setrole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getexperience() {
        return experience;
    }

    public void setexperience(String experience) {
        this.experience = experience;
    }

    public String[] getskills() {
        return skills;
    }

    public void setskills(String[] skills) {
        this.skills = skills;
    }

    @Override
    public String toString() {
        return "Post [role=" + role + ", description=" + description + ", experience=" + experience + ", skills=" + Arrays.toString(skills) + "]";
    }
}