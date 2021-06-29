package com.example.tombank.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tombank.models.Account;
import com.example.tombank.services.AccountService;

@RestController
@RequestMapping(path = "/account")
public class AccountController {

	private final AccountService accountService;
	
	@Autowired
	public AccountController(AccountService accountService) {
		this.accountService = accountService;
	}

	@PostMapping("/newaccount")
	public String addNewUserAccount(Authentication auth) {
		return accountService.createUserAccount(auth.getName());
	}
	
	@GetMapping("/")
	public Set<Account> getUserAccounts(Authentication auth){
		return accountService.getUserAccounts(auth.getName());
	}
	
}
