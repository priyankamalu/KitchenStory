package com.kitchenStory.kitchenStory.entity;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Table(name="Recepy")
public class recepy {
  @Id
  @GeneratedValue
  @Column(name="id")
 private int id;
  
@Column(name="rname")
  private String rname;
  @Column(name="disc")
 private String disc;
  @Column(name="price")
  private String price;
  
  public recepy()
  {super();}
  
  public recepy(int id, String rname, String disc, String price) {
		super();
		this.id = id;
		this.rname = rname;
		this.disc = disc;
		this.price = price;
	}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getRname() {
	return rname;
}

public void setRname(String rname) {
	this.rname = rname;
}

public String getDisc() {
	return disc;
}

public void setDisc(String disc) {
	this.disc = disc;
}

public String getPrice() {
	return price;
}

public void setPrice(String price) {
	this.price = price;
}
  
}
