package com.example.demo.Controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Post;
import com.example.demo.Repository.PostRepository;
import com.example.demo.Repository.SearchRepository;

@RestController
@CrossOrigin(origins="http://localhost:5173")
public class PostController {
	
	
	@Autowired
	PostRepository repo;
	
	@Autowired
	SearchRepository srepo;
	
	
	@GetMapping("/")
	String home() {
		return "This is home page";
	}
	
	
	
	@PostMapping("/allPosts")
	@CrossOrigin
	public Post addJobPosts(@RequestBody Post p) {
		
		System.out.println("this is the add jobs");
		
		repo.save(p);
		
		return p;
		
	}
	
	
	
	@GetMapping("/posts")
	@CrossOrigin
	 List<Post> getAllPosts(){
		
		System.out.println("this is working");
		
		return repo.findAll();
	}
	
	 
	@GetMapping("/posts/{text}")
	@CrossOrigin
	public List<Post> search(@PathVariable String text){
		return srepo.findByText(text);
	}
	

	
	
	
	
	
	

}
