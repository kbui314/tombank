package com.example.tombank.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.tombank.models.User;
import com.example.tombank.repositories.UserRepository;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.userRepository = userRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	public String registerNewUser(User newUser) {
		try {
			newUser.setUserType("normal");
			newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
			userRepository.save(newUser);
			return "Success";
		}catch(Exception e) {
			return "Failed";
		}
	}
	
	public Map<String, String> verifyUser(String username){
		HashMap<String, String> map = new HashMap<>();
		try {
			User user = getUser(username);
			if(user.getUserType().equals("ADMIN")) {
				map.put("message", "Success");
				return map;
			}
			map.put("message", "Failed");
			return map;
		}catch(Exception e) {
			map.put("message", "Failed");
			return map;
		}
	}
	
	public User getUser(String username) {
		try {
			return userRepository.findByUsername(username);
		}catch(Exception e) {
			return new User();
		}
	}
	
	public String updateUser(User user) {
		try {
			userRepository.save(user);
			return "Success";
		}catch(Exception e) {
			return "Failed";
		}
	}
}
