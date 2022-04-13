package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.OrderPlusDetails;
import com.example.demo.entities.Orderdetails;
import com.example.demo.entities.Orders;
import com.example.demo.services.OrderDetailsService;
import com.example.demo.services.OrdersService;


@CrossOrigin(origins = "http://localhost:3000")
@Transactional
@RestController
public class OrdersController {

	@Autowired
	OrdersService orderserv;
	
	@Autowired
	OrderDetailsService odsserv;
	
	
	
	@GetMapping("/allorders")
	public List<Orders> getAll()
	{
		System.out.println("product Fetch");
		List<Orders>  ord= orderserv.getAll();
		
		return ord;
	}
	
	@PostMapping("/saveorders")
	public Orders saveorder(@RequestBody Orders o1)
	{
		System.out.print("In orders controllers");
		return orderserv.ordersave(o1);
		//Orders or=new Orders(o1.getOrderdt(),o1.getTotalprice(),o1.getPaydate(),o1.getPaystatus(),o1.getPaymode(),o1.getTransid(),o1.getOrderstatus(),o1.getSid(),o1.getCid());
		//Orders inserted=orderserv.ordersave(or);
		//int ordid=inserted.getOrderid();
		//Orderdetails ord=new Orderdetails(ordid,o1.getPid(),o1.getQty(),o1.getDisprice()); 
		//return  odsserv.save(ord);
	}
	
	@GetMapping("/deleteorders")
	public List<Orders>deleteproduct(@RequestParam("orderid") int id)
	{
		 orderserv.deleteById(id);
		 return  orderserv.getAll();
	}
	
}
