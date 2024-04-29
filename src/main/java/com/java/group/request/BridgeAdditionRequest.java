package com.java.group.request;





public class BridgeAdditionRequest {
	
	 private String country;
	    private String state;
	    private String division;
	    private String bridgeName;
	    private String location;
	    private String coordinates;
	    private String adminName;
	    private String managerName;
	    
		public String getCountry() {
			return country;
		}
		public void setCountry(String country) {
			this.country = country;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getDivision() {
			return division;
		}
		public void setDivision(String division) {
			this.division = division;
		}
		public String getBridgeName() {
			return bridgeName;
		}
		public void setBridgeName(String bridgeName) {
			this.bridgeName = bridgeName;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public String getCoordinates() {
			return coordinates;
		}
		public void setCoordinates(String coordinates) {
			this.coordinates = coordinates;
		}
		
		public String getAdminName() {
			return adminName;
		}
		public void setAdminName(String adminName) {
			this.adminName = adminName;
		}
		public String getManagerName() {
			return managerName;
		}
		public void setManagerName(String managerName) {
			this.managerName = managerName;
		}
		public BridgeAdditionRequest() {
			super();
			// TODO Auto-generated constructor stub
		}
		public BridgeAdditionRequest(String country, String state, String division, String bridgeName, String location,
				String coordinates, String adminName, String managerName) {
			super();
			this.country = country;
			this.state = state;
			this.division = division;
			this.bridgeName = bridgeName;
			this.location = location;
			this.coordinates = coordinates;
			this.adminName = adminName;
			this.managerName = managerName;
		}
		 
	    
		
		
	    
}
