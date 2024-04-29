package com.java.group.service;


import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.java.group.entity.Bridge;

import com.java.group.entity.User;
import com.java.group.excel.ExcelMethod;
import com.java.group.repository.BridgeRepository;

import com.java.group.repository.UserRepository;
import com.java.group.response.RegistrationResponse;

import java.io.IOException;
import java.lang.reflect.Field;

import java.util.List;
import java.util.UUID;

@Service
public class ServiceFile {

	
	@Autowired
    private BridgeRepository bridgeRepository;
	

	 @Autowired
	 private UserRepository repository;
	
	 @Autowired
		private PassMailService mailService;
	
	 public ResponseEntity<String> save(MultipartFile file) {
		    try {
		        List<Object> entities = ExcelMethod.convertExcelToListOfProduct(file.getInputStream());

		        for (Object entity : entities) {
		            if (entity instanceof Bridge) {
		                Bridge bridge = (Bridge) entity;
		                String errorMessage = registerUserforBridge(bridge);
		                if (errorMessage == null) {
		                    String bridgeName = bridge.getBridgeName();
		                    // Save bridge entity and perform other actions
		                    bridgeRepository.save(bridge);
		                    sendEmailAndRole(bridge.getAdminEmail(), "bridge-admin", bridgeName);
		                    sendEmailAndRole(bridge.getManagerEmail(), "bridge-manager", bridgeName);
		                    sendEmailAndRole(bridge.getOwnerEmail(), "bridge-owner", bridgeName);
		                    updateUserTable(bridge);
		                    RegistrationResponse response = new RegistrationResponse();
		                    response.setMessage("Bridge registered successfully!");
		                } else {
		                    // Return error message if user details do not match
		                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
		                }
		            }
		        }

		        return ResponseEntity.ok("All entities saved successfully");
		    } catch (IOException e) {
		        e.printStackTrace();
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to process file: " + e.getMessage());
		    }
		}

	 private String registerUserforBridge(Bridge bridge) {
		    try {
		        // Check if Admin email exists
		        User adminUser = repository.findByEmail(bridge.getAdminEmail());
		        if (adminUser != null && (!adminUser.getName().equals(bridge.getAdminName()) ||
		                !adminUser.getPhonenumber().equals(bridge.getAdminPhone()) )) {
		            return "User details do not match for Admin email: " + bridge.getAdminEmail();
		        }

		        // Check if Manager email exists
		        User managerUser = repository.findByEmail(bridge.getManagerEmail());
		        if (managerUser != null && (!managerUser.getName().equals(bridge.getManagerName()) ||
		                !managerUser.getPhonenumber().equals(bridge.getManagerPhone()) )) {
		            return "User details do not match for Manager email: " + bridge.getManagerEmail();
		        }

		        // Check if Owner email exists
		        User ownerUser = repository.findByEmail(bridge.getOwnerEmail());
		        if (ownerUser != null && (!ownerUser.getName().equals(bridge.getOwnerName()) ||
		                !ownerUser.getPhonenumber().equals(bridge.getOwnerPhone()))) {
		            return "User details do not match for Owner email: " + bridge.getOwnerEmail();
		        }

		        // Register users only if all emails are valid and details match
		        registerUserIfNotExist(bridge.getAdminEmail(), bridge.getAdminName(), bridge.getAdminPhone());
		        registerUserIfNotExist(bridge.getManagerEmail(), bridge.getManagerName(), bridge.getManagerPhone());
		        registerUserIfNotExist(bridge.getOwnerEmail(), bridge.getOwnerName(), bridge.getOwnerPhone());

		        return null; // Return null if all users are successfully registered
		    } catch (Exception e) {
		        return "Error registering user: " + e.getMessage(); // Return error message if registration fails
		    }
		}


	
	 private String registerUserIfNotExist(String email, String name, Long phone) {
		    User existingUser = repository.findByEmail(email);
		    if (existingUser != null) {
		        // If user exists, check if name, phone, and country code match
		        if (!existingUser.getName().equals(name) ||
		            !existingUser.getPhonenumber().equals(phone) ) {
		            // Return an error message if details do not match
		            return "User details do not match for email: " + email;
		        }
		        // If details match, do not proceed with registration
		        return null;
		    }
		    // Register new user if user does not exist
		    registerUser(email, name, phone);
		    return null;
		}

//	 private void registerUserIfNotExist(String email, String name, Long phone, String countryCode) {
//	        User existingUser = repository.findByEmail(email);
//	        if (existingUser != null) {
//	            // If user exists, check if name, phone, and country code match
//	            if (!existingUser.getName().equals(name) ||
//	                !existingUser.getPhonenumber().equals(phone) ||
//	                !existingUser.getCountryCode().equals(countryCode)) {
//	                // Throw an exception if details do not match
//	                throw new RuntimeException("User details do not match.");
//	            }
//	        }
//	        // Register new user if user does not exist or details match
//	        registerUser(email, name, phone, countryCode);
//	    }



	    private User registerUser(String email, String name, Long phone) {
	        if (email != null && !email.isEmpty() && !repository.existsByEmail(email)) {
	            User user = new User();
	            user.setEmail(email);
	            user.setName(name);
	            
	            user.setPhonenumber(phone);
	            String resetToken = generateResetToken();
	            String generatedPassword = generateRandomPassword();

	            user.setPassword(generatedPassword);
	            user.setPasswordResetRequired(true);
	            user.setResettoken(resetToken);
	            


	            repository.save(user);

	            mailService.sendPasswordResetEmail(resetToken, user.getEmail());
	            return user;
	        }
	        return null;
	    }
	 private void sendEmailAndRole(String email, String role, String bridgeName) {
		    if (email != null && !email.isEmpty()) {
		        mailService.sendBridgeInfo(email, bridgeName, role);
		    }
	  }
	 
	 private void updateUserTable(Bridge bridge) {
	      updateUserTableForEmailAndRole(bridge.getAdminEmail(), "bridge-admin", bridge.getId());
	    
	      
	      updateUserTableForEmailAndRole(bridge.getManagerEmail(), "bridge-manager", bridge.getId());
	
	      
	      updateUserTableForEmailAndRole(bridge.getOwnerEmail(), "bridge-owner", bridge.getId());
	  
	      
	  }
	 
	 
	  private String updateUserTableForEmailAndRole(String email, String role, Long bridgeId) {
	      User user = repository.findByEmail(email);
	      if (user != null) {
	          for (int i = 1; i <= 10; i++) {
	              String bridgeIdFieldName = "bridgeid" + i;
	              String bridgeRoleFieldName = "bridgeRole" + i;

	              try {
	                  Field bridgeIdField = User.class.getDeclaredField(bridgeIdFieldName);
	                  Field bridgeRoleField = User.class.getDeclaredField(bridgeRoleFieldName);

	                  bridgeIdField.setAccessible(true);
	                  bridgeRoleField.setAccessible(true);

	                  Long existingBridgeId = (Long) bridgeIdField.get(user);
	                  String existingBridgeRole = (String) bridgeRoleField.get(user);

	                  if (existingBridgeId == null && existingBridgeRole == null) {
	                      bridgeIdField.set(user, bridgeId);
	                      bridgeRoleField.set(user, role);
	                      repository.save(user);
	                      return "Bridge assigned successfully.";
	                  }
	              } catch (NoSuchFieldException | IllegalAccessException e) {
	                  e.printStackTrace();
	              }
	          }
	          return "User " + user.getEmail() + " already has 10 bridges assigned. Cannot assign a new one.";
	      }
	      return "User not found.";
	  }




	  private String generateRandomPassword() {
		   
		    String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		    StringBuilder generatedPassword = new StringBuilder();
		    for (int i = 0; i < 8; i++) {
		        int index = (int) (Math.random() * characters.length());
		        generatedPassword.append(characters.charAt(index));
		    }
		    return generatedPassword.toString();
		}
		
	  
	  
		
		private String generateResetToken() {
			 String randomUUID = UUID.randomUUID().toString();
			 long timestamp = System.currentTimeMillis();
			    String resetToken = randomUUID + "-" + timestamp;
	      return resetToken;
	  }



}
