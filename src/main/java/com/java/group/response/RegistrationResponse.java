package com.java.group.response;

public class RegistrationResponse {
	
	private String message;
	private Long id;
	private Long sensorNo;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void addErrorMessage(String string) {
		// TODO Auto-generated method stub
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public RegistrationResponse(String message, Long id, Long sensorNo) {
		super();
		this.message = message;
		this.id = id;
		this.sensorNo = sensorNo;
	}

	public RegistrationResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getSensorNo() {
		return sensorNo;
	}

	public void setSensorNo(Long sensorNo) {
		this.sensorNo = sensorNo;
	}
	
	
	
	

}
