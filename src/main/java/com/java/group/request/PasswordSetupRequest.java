package com.java.group.request;

public class PasswordSetupRequest {
	
	private String currentPassword;
	private String newPassword;
    private String newPasswordAgain;
    
    
	public String getCurrentPassword() {
		return currentPassword;
	}
	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getNewPasswordAgain() {
		return newPasswordAgain;
	}
	public void setNewPasswordAgain(String newPasswordAgain) {
		this.newPasswordAgain = newPasswordAgain;
	}
	public PasswordSetupRequest(String currentPassword, String newPassword, String newPasswordAgain) {
		super();
		this.currentPassword = currentPassword;
		this.newPassword = newPassword;
		this.newPasswordAgain = newPasswordAgain;
	}
	public PasswordSetupRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "PasswordSetupRequest [currentPassword=" + currentPassword + ", newPassword=" + newPassword
				+ ", newPasswordAgain=" + newPasswordAgain + "]";
	}
	
    

}
