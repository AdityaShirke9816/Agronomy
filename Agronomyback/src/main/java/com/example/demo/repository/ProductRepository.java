package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Products;


@Repository
public interface ProductRepository extends JpaRepository<Products, Integer> {

	@Query(value="select * from Products where prodname =  ?1" , nativeQuery = true)
	public List<Products> findbyname(String perca);
	
}
