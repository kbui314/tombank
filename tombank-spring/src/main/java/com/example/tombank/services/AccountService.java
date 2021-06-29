package com.example.tombank.services;

import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tombank.models.Account;
import com.example.tombank.models.User;
import com.example.tombank.repositories.AccountRepository;

@Service
public class AccountService {
	
	private final AccountRepository accountRepository;
	private final UserService userService;
	
	@Autowired
	public AccountService(AccountRepository accountRepository, UserService userService) {
		this.accountRepository = accountRepository;
		this.userService = userService; 
	}
	
	private Account createNewAccount() {
		Random random = new Random();
		int accountNum = random.nextInt(9000000) + 1000000;
		Account newAccount = new Account(0, Integer.toString(accountNum), 0);
		return newAccount;
	}

	public String createUserAccount(String username) {
		try {
			User user = userService.getUser(username);
			Account newAccount = createNewAccount();
			accountRepository.save(newAccount);
			user.getAccounts().add(newAccount);
			return userService.updateUser(user);
		}catch(Exception e) {
			return "Failed";
		}
	}
	
	public Set<Account> getUserAccounts(String username){
		try {
			User user = userService.getUser(username);
			return user.getAccounts();
		}catch(Exception e) {
			return null;
		}
	}
}
