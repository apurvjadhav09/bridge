package com.java.group.entity;

import javax.persistence.Entity;



import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import javax.persistence.Table;

@Entity
@Table(name = "BRIDGE_SENSOR_TBL")
public class Sensor {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	
	private String sensortype;	
	
	
	private String spanno;
	private String girderno;
	
	private Long bridgeid;
	
	
	
	private String manualLocation;
	
	 
	 
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	
	public String getSensortype() {
		return sensortype;
	}
	public void setSensortype(String sensortype) {
		this.sensortype = sensortype;
	}
	
	
	public Sensor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getBridgeid() {
		return bridgeid;
	}
	public void setBridgeid(Long bridgeid) {
		this.bridgeid = bridgeid;
	}
	public String getSpanno() {
		return spanno;
	}
	public void setSpanno(String spanno) {
		this.spanno = spanno;
	}
	public String getGirderno() {
		return girderno;
	}
	public void setGirderno(String girderno) {
		this.girderno = girderno;
	}
	public String getManualLocation() {
		return manualLocation;
	}
	public void setManualLocation(String manualLocation) {
		this.manualLocation = manualLocation;
	}
	
	
	
	
	
	
	

}
