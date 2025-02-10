package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.Models.Post;

public interface PostRepository extends MongoRepository<Post, String>{
	
	
	
	

}
