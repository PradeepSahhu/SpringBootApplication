package com.example.demo.Repository;
import java.util.List;

import com.example.demo.Models.Post;

public interface SearchRepository {

	
	List<Post> findByText(String text);
}
