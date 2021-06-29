package com.example.tombank.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accounts")
public class Account {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int accid;
	
	@Column(name = "accnumber")
	public String accNumber;
	
	@Column(name = "balance")
	public int balance;

	public Account() {
		super();
	}

	public Account(int accid, String accNumber, int balance) {
		super();
		this.accid = accid;
		this.accNumber = accNumber;
		this.balance = balance;
	}

	public int getAccid() {
		return accid;
	}

	public void setAccid(int accid) {
		this.accid = accid;
	}

	public String getAccNumber() {
		return accNumber;
	}

	public void setAccNumber(String accNumber) {
		this.accNumber = accNumber;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}
	
}
