package com.example.tombank.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.tombank.models.User;
import com.example.tombank.services.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public String registerNewUser(@RequestBody User newUser) {
		return userService.registerNewUser(newUser);
	}
	
	@GetMapping("/verify")
	public Map<String, String> verify(Authentication auth){
		return userService.verifyUser(auth.getName());
	}

}
