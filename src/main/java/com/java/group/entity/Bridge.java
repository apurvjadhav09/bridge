package com.java.group.entity;



import javax.persistence.*;





@Entity
@Table(name = "BRIDGE_MASTER_TBL",uniqueConstraints = {
        @UniqueConstraint(columnNames = "bridgeName")})
public class Bridge {
	
	
	
	
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String country;
 private String state;
 private String division;
 
 @Column(unique = true)
 private String bridgeName;
 private String location;
 private String coordinates;
 private String superadminname;
 
 private String city;
 
 private Long nobridgespan;	
	private Long noofgirders;
 private String accesslevel;
 
 private Long superadminId;
 
 
 
// @Lob
// private byte[] imagePath;

 @Lob
 private byte[] csvFileData;

 private String csvFileName;
 
 @Lob
 private byte[] stadproFileData;

 private String stadproFileName;
 
 private String adminName;
	
	private String adminEmail;
	
	private Long adminPhone;
//	private String admin1countryCode;
	
private String adminName2;
	
	private String adminEmail2;
//	private String admin2countryCode;
	
	private Long adminPhone2;
	
private String adminName3;
	
	private String adminEmail3;
//	private String admin3countryCode;
	
	private Long adminPhone3;
	
	private String managerName;
	
	private String managerEmail;
	
	
//	private String manager1countryCode;
	
	private Long managerPhone;
	
private String managerName2;
	
	private String managerEmail2;
//	private String manager2countryCode;
	
	private Long managerPhone2;
	
private String managerName3;
	
	private String managerEmail3;
//	private String manager3countryCode;
	private Long managerPhone3;
	
private String managerName4;
	
	private String managerEmail4;
//	private String manager4countryCode;
	
	
	private Long managerPhone4;
private String managerName5;
	
	private String managerEmail5;
//	private String manager5countryCode;
	
	private Long managerPhone5;
private String managerName6;
	
	private String managerEmail6;
//	private String manager6countryCode;
	private Long managerPhone6;
	
	
	private String ownerName;
	
	private String ownerEmail;
//	private String owner1countryCode;
	
	
	private Long ownerPhone;
	
private String ownerName2;
	
	private String ownerEmail2;
//	private String owner2countryCode;
	
	private Long ownerPhone2;
	
private String ownerName3;
	
	private String ownerEmail3;
//	private String owner3countryCode;
	
	private Long ownerPhone3;
 
 


public Bridge() {
	// TODO Auto-generated constructor stub
}




public Long getId() {
	return id;
}




public String getCity() {
	return city;
}




public void setCity(String city) {
	this.city = city;
}




public void setId(Long id) {
	this.id = id;
}




public String getCountry() {
	return country;
}




public String getSuperadminname() {
	return superadminname;
}




public void setSuperadminname(String superadminname) {
	this.superadminname = superadminname;
}




public void setCountry(String country) {
	this.country = country;
}




public byte[] getCsvFileData() {
	return csvFileData;
}




public void setCsvFileData(byte[] csvFileData) {
	this.csvFileData = csvFileData;
}




public String getCsvFileName() {
	return csvFileName;
}




public void setCsvFileName(String csvFileName) {
	this.csvFileName = csvFileName;
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




public Long getSuperadminId() {
	return superadminId;
}




public void setSuperadminId(Long superadminId) {
	this.superadminId = superadminId;
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




public byte[] getStadproFileData() {
	return stadproFileData;
}




public void setStadproFileData(byte[] stadproFileData) {
	this.stadproFileData = stadproFileData;
}




public String getStadproFileName() {
	return stadproFileName;
}




public void setStadproFileName(String stadproFileName) {
	this.stadproFileName = stadproFileName;
}




public void setCoordinates(String coordinates) {
	this.coordinates = coordinates;
}




public String getAccesslevel() {
	return accesslevel;
}




public Long getNobridgespan() {
	return nobridgespan;
}




public void setNobridgespan(Long nobridgespan) {
	this.nobridgespan = nobridgespan;
}




public Long getNoofgirders() {
	return noofgirders;
}









public void setNoofgirders(Long noofgirders) {
	this.noofgirders = noofgirders;
}




public void setAccesslevel(String accesslevel) {
	this.accesslevel = accesslevel;
}




public String getAdminName() {
	return adminName;
}




public void setAdminName(String adminName) {
	this.adminName = adminName;
}




public String getAdminEmail() {
	return adminEmail;
}




//public byte[] getImagePath() {
//	return imagePath;
//}
//
//
//
//
//public void setImagePath(byte[] imagePath) {
//	this.imagePath = imagePath;
//}




public void setAdminEmail(String adminEmail) {
	this.adminEmail = adminEmail;
}




public Long getAdminPhone() {
	return adminPhone;
}




public void setAdminPhone(Long adminPhone) {
	this.adminPhone = adminPhone;
}




public String getAdminName2() {
	return adminName2;
}




public void setAdminName2(String adminName2) {
	this.adminName2 = adminName2;
}




public String getAdminEmail2() {
	return adminEmail2;
}




public void setAdminEmail2(String adminEmail2) {
	this.adminEmail2 = adminEmail2;
}




public Long getAdminPhone2() {
	return adminPhone2;
}




public void setAdminPhone2(Long adminPhone2) {
	this.adminPhone2 = adminPhone2;
}




public String getAdminName3() {
	return adminName3;
}




public void setAdminName3(String adminName3) {
	this.adminName3 = adminName3;
}




public String getAdminEmail3() {
	return adminEmail3;
}




public void setAdminEmail3(String adminEmail3) {
	this.adminEmail3 = adminEmail3;
}




public Long getAdminPhone3() {
	return adminPhone3;
}




public void setAdminPhone3(Long adminPhone3) {
	this.adminPhone3 = adminPhone3;
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




public Long getManagerPhone() {
	return managerPhone;
}




public void setManagerPhone(Long managerPhone) {
	this.managerPhone = managerPhone;
}




public String getManagerName2() {
	return managerName2;
}




public void setManagerName2(String managerName2) {
	this.managerName2 = managerName2;
}




public String getManagerEmail2() {
	return managerEmail2;
}




public void setManagerEmail2(String managerEmail2) {
	this.managerEmail2 = managerEmail2;
}




public Long getManagerPhone2() {
	return managerPhone2;
}




public void setManagerPhone2(Long managerPhone2) {
	this.managerPhone2 = managerPhone2;
}




public String getManagerName3() {
	return managerName3;
}




public void setManagerName3(String managerName3) {
	this.managerName3 = managerName3;
}




public String getManagerEmail3() {
	return managerEmail3;
}




public void setManagerEmail3(String managerEmail3) {
	this.managerEmail3 = managerEmail3;
}




public Long getManagerPhone3() {
	return managerPhone3;
}




public void setManagerPhone3(Long managerPhone3) {
	this.managerPhone3 = managerPhone3;
}




public String getManagerName4() {
	return managerName4;
}




public void setManagerName4(String managerName4) {
	this.managerName4 = managerName4;
}




public String getManagerEmail4() {
	return managerEmail4;
}




public void setManagerEmail4(String managerEmail4) {
	this.managerEmail4 = managerEmail4;
}




public Long getManagerPhone4() {
	return managerPhone4;
}




public void setManagerPhone4(Long managerPhone4) {
	this.managerPhone4 = managerPhone4;
}




public String getManagerName5() {
	return managerName5;
}




public void setManagerName5(String managerName5) {
	this.managerName5 = managerName5;
}




public String getManagerEmail5() {
	return managerEmail5;
}




public void setManagerEmail5(String managerEmail5) {
	this.managerEmail5 = managerEmail5;
}




public Long getManagerPhone5() {
	return managerPhone5;
}




public void setManagerPhone5(Long managerPhone5) {
	this.managerPhone5 = managerPhone5;
}




public String getManagerName6() {
	return managerName6;
}




public void setManagerName6(String managerName6) {
	this.managerName6 = managerName6;
}




public String getManagerEmail6() {
	return managerEmail6;
}




public void setManagerEmail6(String managerEmail6) {
	this.managerEmail6 = managerEmail6;
}




public Long getManagerPhone6() {
	return managerPhone6;
}




public void setManagerPhone6(Long managerPhone6) {
	this.managerPhone6 = managerPhone6;
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




public Long getOwnerPhone() {
	return ownerPhone;
}




public void setOwnerPhone(Long ownerPhone) {
	this.ownerPhone = ownerPhone;
}




public String getOwnerName2() {
	return ownerName2;
}




public void setOwnerName2(String ownerName2) {
	this.ownerName2 = ownerName2;
}




public String getOwnerEmail2() {
	return ownerEmail2;
}




public void setOwnerEmail2(String ownerEmail2) {
	this.ownerEmail2 = ownerEmail2;
}




public Long getOwnerPhone2() {
	return ownerPhone2;
}




public void setOwnerPhone2(Long ownerPhone2) {
	this.ownerPhone2 = ownerPhone2;
}




public String getOwnerName3() {
	return ownerName3;
}




public void setOwnerName3(String ownerName3) {
	this.ownerName3 = ownerName3;
}




public String getOwnerEmail3() {
	return ownerEmail3;
}




public void setOwnerEmail3(String ownerEmail3) {
	this.ownerEmail3 = ownerEmail3;
}




public Long getOwnerPhone3() {
	return ownerPhone3;
}




public void setOwnerPhone3(Long ownerPhone3) {
	this.ownerPhone3 = ownerPhone3;
}







}