package com.java.group.request;




public class AdminRegistrationRequest {
	
	 private String username;
	    private String password;
	    private String role;
	    private String email;
	    private Long phoneNumber;
	    
	    private String recoveryEmail;
	    
		public String getRecoveryEmail() {
			return recoveryEmail;
		}
		public void setRecoveryEmail(String recoveryEmail) {
			this.recoveryEmail = recoveryEmail;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		
		
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		
		public Long getPhoneNumber() {
			return phoneNumber;
		}
		public void setPhoneNumber(Long phoneNumber) {
			this.phoneNumber = phoneNumber;
		}
		public AdminRegistrationRequest() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		public AdminRegistrationRequest(String username, String password, String role, String email, Long phoneNumber,
				String recoveryEmail) {
			super();
			this.username = username;
			this.password = password;
			this.role = role;
			this.email = email;
			this.phoneNumber = phoneNumber;
			this.recoveryEmail = recoveryEmail;
		}
		@Override
		public String toString() {
			return "AdminRegistrationRequest [username=" + username + ", password=" + password + ", role=" + role
					+ ", email=" + email + ", phoneNumber=" + phoneNumber + ", recoveryEmail=" + recoveryEmail + "]";
		}
		
		
		
		
		
		
	    
	    

}
