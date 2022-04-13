package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Sellers;

import com.example.demo.repository.SellersRepository;

@Service
public class SellersService {

	

	@Autowired
	SellersRepository selrepo;
	
	
	
	public Sellers save(Sellers s)
	{
		return selrepo.save(s);
	}
	
	public List<Sellers> getAll()
	{
		return selrepo.findAll();
	}
	
	public void deleteById(int id)
	{
		selrepo.deleteById(id);
	}
}
