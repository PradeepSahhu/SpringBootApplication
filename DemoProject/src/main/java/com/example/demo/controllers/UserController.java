package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	
	@GetMapping("/")
	 String home() {
		 return "Hello Pradeep";
	 }
	
	@GetMapping("/data")
	String getData() {
		return "this is the data";
	}

}
