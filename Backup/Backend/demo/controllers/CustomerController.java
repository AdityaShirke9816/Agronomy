package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegister;
import com.example.demo.entities.Login;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

	@Autowired
	LoginService lserv;
	
	@Autowired
	CustomerService cserv;
	
	@PostMapping("/registerc")
	public Customer registercust(@RequestBody CustomerRegister c )
	{
		System.out.println(c.toString());
			Login l=new Login(c.getPass(),c.getSec_ques(),c.getAns(),c.getEmail(),c.getContactno(),"enabled",c.getAddress(),"Customer",3);
			System.out.println(l.toString());
			Login inserted=lserv.add(l);
			System.out.println(l.toString());
			Customer cust=new Customer(c.getFname(),c.getLname(),inserted);
			return cserv.add(cust);
			
		
	}
	
}
