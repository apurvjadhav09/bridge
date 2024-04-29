package com.java.group.request;

public class UserInfoRequest {
private String adminName;
	
	private String adminEmail;
	
	private String adminPhonne;
	
	private String managerName;
	
	private String managerEmail;
	
	private String managerPhone;
	
	
	private String ownerName;
	
	private String ownerEmail;
	
	private String ownerPhone;

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminPhonne() {
		return adminPhonne;
	}

	public void setAdminPhonne(String adminPhonne) {
		this.adminPhonne = adminPhonne;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getManagerEmail() {
		return managerEmail;
	}

	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}

	public String getManagerPhone() {
		return managerPhone;
	}

	public void setManagerPhone(String managerPhone) {
		this.managerPhone = managerPhone;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getOwnerEmail() {
		return ownerEmail;
	}

	public void setOwnerEmail(String ownerEmail) {
		this.ownerEmail = ownerEmail;
	}

	public String getOwnerPhone() {
		return ownerPhone;
	}

	public void setOwnerPhone(String ownerPhone) {
		this.ownerPhone = ownerPhone;
	}

	public UserInfoRequest(String adminName, String adminEmail, String adminPhonne, String managerName,
			String managerEmail, String managerPhone, String ownerName, String ownerEmail, String ownerPhone) {
		super();
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminPhonne = adminPhonne;
		this.managerName = managerName;
		this.managerEmail = managerEmail;
		this.managerPhone = managerPhone;
		this.ownerName = ownerName;
		this.ownerEmail = ownerEmail;
		this.ownerPhone = ownerPhone;
	}
	
	
	
}
