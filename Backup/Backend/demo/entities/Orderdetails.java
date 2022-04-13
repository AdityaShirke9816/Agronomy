package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orderdetails")
public class Orderdetails {

	@Id
	int orderid;
	@Column
	int pid;
	@Column
	int qty;
	@Column
	double disprice;
	
	
	public Orderdetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orderdetails(int orderid, int pid, int qty, double disprice) {
		super();
		this.orderid = orderid;
		this.pid = pid;
		this.qty = qty;
		this.disprice = disprice;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public double getDisprice() {
		return disprice;
	}
	public void setDisprice(double disprice) {
		this.disprice = disprice;
	}
	@Override
	public String toString() {
		return "Orderdetails [orderid=" + orderid + ", pid=" + pid + ", qty=" + qty + ", disprice=" + disprice + "]";
	}
}
