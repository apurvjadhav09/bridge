package com.java.group.service;





import java.io.IOException;
import java.lang.reflect.Field;


import java.util.HashSet;
import java.util.List;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.java.group.entity.Bridge;
import com.java.group.entity.User;
import com.java.group.repository.BridgeRepository;
import com.java.group.repository.UserRepository;
import com.java.group.response.RegistrationResponse;



@Service
@Transactional
public class BridgeService {
	
	@Autowired
	private PassMailService mailService;

    @Autowired
    private BridgeRepository bridgeRepository;
    
    
    @Autowired
    private UserRepository repository;
    
   
    public RegistrationResponse registerBridge(Bridge bridge) {
    	   
        try {
        	boolean allUsersRegistered = registerUserforBridge(bridge);
            if (allUsersRegistered) {
                String bridgeName = bridge.getBridgeName();
                bridge.setCountry(bridge.getCountry());
                bridge.setState(bridge.getState());
                bridge.setDivision(bridge.getDivision());
                bridge.setBridgeName(bridgeName);
                bridge.setLocation(bridge.getLocation());
                bridge.setCoordinates(bridge.getCoordinates());
                bridge.setNoofgirders(bridge.getNoofgirders());
                bridge.setNobridgespan(bridge.getNobridgespan());
                bridge.setSuperadminId(bridge.getSuperadminId());
                bridge.setCity(bridge.getCity());
                

                Bridge savedBridge = bridgeRepository.save(bridge);
                Long bridgeId = savedBridge.getId();
              

                sendEmailAndRoleForBridge(bridge);
                updateUserTable(bridge);
                RegistrationResponse response = new RegistrationResponse();
                response.setMessage("Bridge registered successfully!");
                response.setId(bridgeId);
                
                return response;
            } else { 
                RegistrationResponse response = new RegistrationResponse();
                response.setMessage("User details do not match.");
                return response;
            }
        } catch (DataIntegrityViolationException e) {
            String errorMessage = e.getMessage();
            if (errorMessage.contains("unique_constraint_name_for_bridgeName")) {
                RegistrationResponse response = new RegistrationResponse();
                response.setMessage("Bridge with the given name already exists.");
                return response;
            } else {
                RegistrationResponse response = new RegistrationResponse();
                response.setMessage("Unique constraint violation occurred.");
                return response;
            }
        } catch (RuntimeException e) {
            // Handle other runtime exceptions
            RegistrationResponse response = new RegistrationResponse();
            response.setMessage("Error: " + e.getMessage());
            return response;
        }
    }
    
  
    private boolean registerUserforBridge(Bridge bridge) {
        boolean allUsersRegistered = true;
        try {
            registerUserIfNotExist(bridge.getAdminEmail(), bridge.getAdminName(), bridge.getAdminPhone());
            registerUserIfNotExist(bridge.getAdminEmail2(), bridge.getAdminName2(), bridge.getAdminPhone2());
            registerUserIfNotExist(bridge.getAdminEmail3(), bridge.getAdminName3(), bridge.getAdminPhone3());

            registerUserIfNotExist(bridge.getManagerEmail(), bridge.getManagerName(), bridge.getManagerPhone());
            registerUserIfNotExist(bridge.getManagerEmail2(), bridge.getManagerName2(), bridge.getManagerPhone2());
            registerUserIfNotExist(bridge.getManagerEmail3(), bridge.getManagerName3(), bridge.getManagerPhone3());
            registerUserIfNotExist(bridge.getManagerEmail4(), bridge.getManagerName4(), bridge.getManagerPhone4());
            registerUserIfNotExist(bridge.getManagerEmail5(), bridge.getManagerName5(), bridge.getManagerPhone5());
            registerUserIfNotExist(bridge.getManagerEmail6(), bridge.getManagerName6(), bridge.getManagerPhone6());

            registerUserIfNotExist(bridge.getOwnerEmail(), bridge.getOwnerName(), bridge.getOwnerPhone());
            registerUserIfNotExist(bridge.getOwnerEmail2(), bridge.getOwnerName2(), bridge.getOwnerPhone2());
            registerUserIfNotExist(bridge.getOwnerEmail3(), bridge.getOwnerName3(), bridge.getOwnerPhone3());

        } catch (Exception e) {
            allUsersRegistered = false;
        }
        return allUsersRegistered;
    }

//    private void registerUserIfNotExist(String email, String name, Long phone, String countryCode) {
//        User existingUser = repository.findByEmail(email);
//        if (existingUser != null) {
//            // If user exists, check if name, phone, and country code match
//            if (!existingUser.getName().equals(name) ||
//                !existingUser.getPhonenumber().equals(phone) ||
//                !existingUser.getCountryCode().equals(countryCode)) {
//                // Throw an exception if details do not match
//                throw new RuntimeException("User details do not match.");
//            }
//        }
//        // Register new user if user does not exist or details match
//        registerUser(email, name, phone, countryCode);
//    }
    private void registerUserIfNotExist(String email, String name, Long phone) {
        User existingUser = repository.findByEmail(email);
        if (existingUser != null) {
            // If user exists, check if name, phone, and country code match
            if ((name != null && !name.equals(existingUser.getName())) ||
                (phone != null && !phone.equals(existingUser.getPhonenumber())) ) {
                // Throw an exception if details do not match
                throw new RuntimeException("User details do not match.");
            }
        }
        // Register new user if user does not exist or details match
        registerUser(email, name, phone);
    }


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
    
    private void sendEmailAndRoleForBridge(Bridge bridge) {
        sendEmailAndRole(bridge.getAdminEmail(), "bridge-admin", bridge.getBridgeName());
        sendEmailAndRole(bridge.getAdminEmail2(), "bridge-admin", bridge.getBridgeName());
        sendEmailAndRole(bridge.getAdminEmail3(), "bridge-admin", bridge.getBridgeName());

        sendEmailAndRole(bridge.getManagerEmail(), "bridge-manager", bridge.getBridgeName());
        sendEmailAndRole(bridge.getManagerEmail2(), "bridge-manager", bridge.getBridgeName());
        sendEmailAndRole(bridge.getManagerEmail3(), "bridge-manager", bridge.getBridgeName());
        sendEmailAndRole(bridge.getManagerEmail4(), "bridge-manager", bridge.getBridgeName());
        sendEmailAndRole(bridge.getManagerEmail5(), "bridge-manager", bridge.getBridgeName());
        sendEmailAndRole(bridge.getManagerEmail6(), "bridge-manager", bridge.getBridgeName());

        sendEmailAndRole(bridge.getOwnerEmail(), "bridge-owner", bridge.getBridgeName());
        sendEmailAndRole(bridge.getOwnerEmail2(), "bridge-owner", bridge.getBridgeName());
        sendEmailAndRole(bridge.getOwnerEmail3(), "bridge-owner", bridge.getBridgeName());
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
	
	 private void updateUserTable(Bridge bridge) {
		    Long bridgeId = bridge.getId();
		    updateUserTableForEmailAndRole(bridge.getAdminEmail(), "bridge-admin", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getAdminEmail2(), "bridge-admin", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getAdminEmail3(), "bridge-admin", bridgeId);

		    updateUserTableForEmailAndRole(bridge.getManagerEmail(), "bridge-manager", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getManagerEmail2(), "bridge-manager", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getManagerEmail3(), "bridge-manager", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getManagerEmail4(), "bridge-manager", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getManagerEmail5(), "bridge-manager", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getManagerEmail6(), "bridge-manager", bridgeId);

		    updateUserTableForEmailAndRole(bridge.getOwnerEmail(), "bridge-owner", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getOwnerEmail2(), "bridge-owner", bridgeId);
		    updateUserTableForEmailAndRole(bridge.getOwnerEmail3(), "bridge-owner", bridgeId);
		}

	private void registerUsersIfNotExist(Bridge updatedBridge) {
	    registerUserIfNotExist(updatedBridge.getAdminEmail(), updatedBridge.getAdminName(), updatedBridge.getAdminPhone());
	    registerUserIfNotExist(updatedBridge.getAdminEmail2(), updatedBridge.getAdminName2(), updatedBridge.getAdminPhone2());
	    registerUserIfNotExist(updatedBridge.getAdminEmail3(), updatedBridge.getAdminName3(), updatedBridge.getAdminPhone3());

	    registerUserIfNotExist(updatedBridge.getManagerEmail(), updatedBridge.getManagerName(), updatedBridge.getManagerPhone());
	    registerUserIfNotExist(updatedBridge.getManagerEmail2(), updatedBridge.getManagerName2(), updatedBridge.getManagerPhone2());
	    registerUserIfNotExist(updatedBridge.getManagerEmail3(), updatedBridge.getManagerName3(), updatedBridge.getManagerPhone3());
	    registerUserIfNotExist(updatedBridge.getManagerEmail4(), updatedBridge.getManagerName4(), updatedBridge.getManagerPhone4());
	    registerUserIfNotExist(updatedBridge.getManagerEmail5(), updatedBridge.getManagerName5(), updatedBridge.getManagerPhone5());
	    registerUserIfNotExist(updatedBridge.getManagerEmail6(), updatedBridge.getManagerName6(), updatedBridge.getManagerPhone6());

	    registerUserIfNotExist(updatedBridge.getOwnerEmail(), updatedBridge.getOwnerName(), updatedBridge.getOwnerPhone());
	    registerUserIfNotExist(updatedBridge.getOwnerEmail2(), updatedBridge.getOwnerName2(), updatedBridge.getOwnerPhone2());
	    registerUserIfNotExist(updatedBridge.getOwnerEmail3(), updatedBridge.getOwnerName3(), updatedBridge.getOwnerPhone3());
	}


	public RegistrationResponse updateBridge(Long bridgeId, Bridge updatedBridge) {
	    Optional<Bridge> optionalBridge = bridgeRepository.findById(bridgeId);
	    if (optionalBridge.isPresent()) {
	        Bridge bridge = optionalBridge.get();

	        bridge.setCountry(updatedBridge.getCountry() != null ? updatedBridge.getCountry() : bridge.getCountry());
	        bridge.setState(updatedBridge.getState() != null ? updatedBridge.getState() : bridge.getState());
	        bridge.setDivision(updatedBridge.getDivision()!= null ? updatedBridge.getDivision(): bridge.getDivision());
	        bridge.setBridgeName(updatedBridge.getBridgeName()!= null ? updatedBridge.getBridgeName(): bridge.getBridgeName());
	        bridge.setLocation(updatedBridge.getLocation()!= null ? updatedBridge.getLocation():bridge.getLocation());
	        bridge.setCoordinates(updatedBridge.getCoordinates()!= null ? updatedBridge.getCoordinates():bridge.getCoordinates());
	        bridge.setNobridgespan(updatedBridge.getNobridgespan()!= null ? updatedBridge.getNobridgespan():bridge.getNobridgespan());
	        bridge.setNoofgirders(updatedBridge.getNoofgirders()!= null ? updatedBridge.getNoofgirders():bridge.getNoofgirders());
	       bridge.setCity(updatedBridge.getCity()!=null ? updatedBridge.getCity():bridge.getCity());
	        
	      
	       
	            registerUsersIfNotExist(updatedBridge);

	            checkAndSendRemoveUserEmail(bridge, updatedBridge);

	           bridgeRepository.save(bridge);
	         
	            RegistrationResponse response = new RegistrationResponse();
	            response.setMessage("Bridge updated successfully!");

	            return response;
	        }
	     else {
	        RegistrationResponse response = new RegistrationResponse();
	        response.setMessage("Bridge not found with ID :" + bridgeId);
	        return response;
	    }
	}
	
	private void checkAndSendRemoveUserEmail(Bridge bridge, Bridge updatedBridge) {
	    Set<String> allEmails = new HashSet<>();
	    allEmails.add(bridge.getAdminEmail());
	    allEmails.add(bridge.getAdminEmail2());
	    allEmails.add(bridge.getAdminEmail3());
	    allEmails.add(bridge.getManagerEmail());
	    allEmails.add(bridge.getManagerEmail2());
	    allEmails.add(bridge.getManagerEmail3());
	    allEmails.add(bridge.getManagerEmail4());
	    allEmails.add(bridge.getManagerEmail5());
	    allEmails.add(bridge.getManagerEmail6());
	    allEmails.add(bridge.getOwnerEmail());
	    allEmails.add(bridge.getOwnerEmail2());
	    allEmails.add(bridge.getOwnerEmail3());

	    Set<String> updatedEmails = new HashSet<>();
	    updatedEmails.add(updatedBridge.getAdminEmail());
	    updatedEmails.add(updatedBridge.getAdminEmail2());
	    updatedEmails.add(updatedBridge.getAdminEmail3());
	    updatedEmails.add(updatedBridge.getManagerEmail());
	    updatedEmails.add(updatedBridge.getManagerEmail2());
	    updatedEmails.add(updatedBridge.getManagerEmail3());
	    updatedEmails.add(updatedBridge.getManagerEmail4());
	    updatedEmails.add(updatedBridge.getManagerEmail5());
	    updatedEmails.add(updatedBridge.getManagerEmail6());
	    updatedEmails.add(updatedBridge.getOwnerEmail());
	    updatedEmails.add(updatedBridge.getOwnerEmail2());
	    updatedEmails.add(updatedBridge.getOwnerEmail3());

	    for (String email : allEmails) {
	        if (email != null && !updatedEmails.contains(email)) {
	        	System.out.println(email+" "+"new email"+updatedEmails);
	            if (email.equals(bridge.getAdminEmail())) {
	            	
	            	bridge.setAdminEmail(null);
	                bridge.setAdminName(null);
//	                bridge.setAdmin1countryCode(null);
	                bridge.setAdminPhone(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-admin",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-admin");
	            }
	            if (email.equals(bridge.getAdminEmail2())) {
	            	bridge.setAdminEmail2(null);
	                bridge.setAdminName2(null);
//	                bridge.setAdmin2countryCode(null);
	                bridge.setAdminPhone2(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-admin",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-admin");
	            }
	            if (email.equals(bridge.getAdminEmail3())) {
	            	bridge.setAdminEmail3(null);
	                bridge.setAdminName3(null);
//	                bridge.setAdmin3countryCode(null);
	                bridge.setAdminPhone3(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-admin",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-admin");
	            }
	            if (email.equals(bridge.getManagerEmail())) {
	            	bridge.setManagerEmail(null);
	                bridge.setManagerName(null);
//	                bridge.setManager1countryCode(null);
	                bridge.setManagerPhone(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-manager",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-manager");
	            }
	            if (email.equals(bridge.getManagerEmail2())) {
	            	bridge.setManagerEmail2(null);
	                bridge.setManagerName2(null);
//	                bridge.setManager2countryCode(null);
	                bridge.setManagerPhone2(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-manager",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-manager");
	            }
	            if (email.equals(bridge.getManagerEmail3())) {
	            	bridge.setManagerEmail3(null);
	                bridge.setManagerName3(null);
//	                bridge.setManager3countryCode(null);
	                bridge.setManagerPhone3(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-manager",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-manager");
	            }
	            if (email.equals(bridge.getManagerEmail4())) {
	            	bridge.setManagerEmail4(null);
	                bridge.setManagerName4(null);
//	                bridge.setManager4countryCode(null);
	                bridge.setManagerPhone4(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-manager",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-manager");
	            }
	            if (email.equals(bridge.getManagerEmail5())) {
	            	bridge.setManagerEmail5(null);
	                bridge.setManagerName5(null);
//	                bridge.setManager5countryCode(null);
	                bridge.setManagerPhone5(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-manager",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-manager");
	            }
	            if (email.equals(bridge.getManagerEmail6())) {
	            	bridge.setManagerEmail6(null);
	                bridge.setManagerName6(null);
//	                bridge.setManager6countryCode(null);
	                bridge.setManagerPhone6(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-manager",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-manager");
	            }
	            // Repeat the above for other manager emails (managerEmail2 to managerEmail6)
	            if (email.equals(bridge.getOwnerEmail())) {
	            	bridge.setOwnerEmail(null);
	                bridge.setOwnerName(null);
//	                bridge.setOwner1countryCode(null);
	                bridge.setOwnerPhone(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-owner",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-owner");
	            }
	            if (email.equals(bridge.getOwnerEmail2())) {
	            	bridge.setOwnerEmail2(null);
	                bridge.setOwnerName2(null);
//	                bridge.setOwner2countryCode(null);
	                bridge.setOwnerPhone2(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-owner",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-owner");
	            }
	            if (email.equals(bridge.getOwnerEmail3())) {
	            	bridge.setOwnerEmail3(null);
	                bridge.setOwnerName3(null);
//	                bridge.setOwner3countryCode(null);
	                bridge.setOwnerPhone3(null);
	                updateUserTableForEmailAndRoleforRemove(email,"bridge-owner",bridge.getId());
	                mailService.sendRemoveUserFromBridgeEmail(email, bridge.getBridgeName(),"bridge-owner");
	            }

	            bridgeRepository.save(bridge);
	            String bridgeName = bridge.getBridgeName();
	           

	            System.out.println("Email sent to: " + email + " for bridge: " + bridgeName);
	        }
	    }

	    boolean emailsMatch = false;
	    for (String email : allEmails) {
	        if (!updatedEmails.contains(email)) {
	        	 if (email.equals(bridge.getAdminEmail())) {
		            	
		            	sendEmailAndRole(email, "bridge-admin", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-admin",bridge.getId());
		            }
		            if (email.equals(bridge.getAdminEmail2())) {
		            	sendEmailAndRole(email, "bridge-admin", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-admin",bridge.getId());
		            }
		            if (email.equals(bridge.getAdminEmail3())) {
		            	sendEmailAndRole(email, "bridge-admin", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-admin",bridge.getId());
		            }
		            if (email.equals(bridge.getManagerEmail())) {
		            	sendEmailAndRole(email, "bridge-manager", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-manager",bridge.getId());
		            }
		            if (email.equals(bridge.getManagerEmail2())) {
		            	sendEmailAndRole(email, "bridge-manager", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-manager",bridge.getId());
		            }
		            if (email.equals(bridge.getManagerEmail3())) {
		            	sendEmailAndRole(email, "bridge-manager", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-manager",bridge.getId());
		            }
		            if (email.equals(bridge.getManagerEmail4())) {
		            	sendEmailAndRole(email, "bridge-manager", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-manager",bridge.getId());
		            }
		            if (email.equals(bridge.getManagerEmail5())) {
		            	sendEmailAndRole(email, "bridge-manager", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-manager",bridge.getId());
		            }
		            if (email.equals(bridge.getManagerEmail6())) {
		            	sendEmailAndRole(email, "bridge-manager", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-manager",bridge.getId());
		            }
		            // Repeat the above for other manager emails (managerEmail2 to managerEmail6)
		            if (email.equals(bridge.getOwnerEmail())) {
		            	sendEmailAndRole(email, "bridge-owner", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-owner",bridge.getId());
		            }
		            if (email.equals(bridge.getOwnerEmail2())) {
		            	sendEmailAndRole(email, "bridge-owner", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-owner",bridge.getId());
		            }
		            if (email.equals(bridge.getOwnerEmail3())) {
		            	sendEmailAndRole(email, "bridge-owner", bridge.getBridgeName());
		            	updateUserTableForEmailAndRole(email,"bridge-owner",bridge.getId());
		            }
	        	
	            emailsMatch = true;
	            break;
	        }
	    }

	    if (!emailsMatch) {
	    	System.out.println("updated bridge existing user");
	    	
	    	
	    	
	    }
	}


  private void sendEmailAndRole(String email, String role, String bridgeName) {
	    if (email != null && !email.isEmpty()) {
	        mailService.sendBridgeInfo(email, bridgeName, role);
	    }
  }
  

  
  public boolean userExists(String email) {
	    
	    return repository.existsByEmail(email);
	}


  private void updateUserTableForEmailAndRole(String email, String role, Long bridgeId) {
	    User user = repository.findByEmail(email);
	    if (user != null) {
	        boolean updated = false;
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

	                if (existingBridgeId != null && existingBridgeId.equals(bridgeId)&& existingBridgeRole!=null) {
	                    // Update existing entry
	                	
	                    bridgeRoleField.set(user, role);
	                   
	                    updated = true;
	                    break;
	                }
	            } catch (NoSuchFieldException | IllegalAccessException e) {
	                e.printStackTrace();
	            }
	        }
	        if (!updated) {
	        
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
	                        break;
	                    }
	                } catch (NoSuchFieldException | IllegalAccessException e) {
	                    e.printStackTrace();
	                }
	            }
	        } else {
	            repository.save(user); // Save the updated user
	        }
	    }
	    }
  
  private void updateUserTableForEmailAndRoleforRemove(String email, String role, Long bridgeId) {
	    List<User> users = repository.findAllByEmail(email);
	    for (User user : users) {
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
	               
	                
	                if (existingBridgeId != null && existingBridgeId.equals(bridgeId) && existingBridgeRole != null && existingBridgeRole.equals(role)) {
	                    bridgeIdField.set(user, null);
	                    bridgeRoleField.set(user, null);
	                    
	                    repository.save(user);
	                    break; // Exit the loop after updating the user
	                }
	            } catch (NoSuchFieldException | IllegalAccessException e) {
	                e.printStackTrace();
	            }
	        }
	    }
	}


  public Long findBridgeIdByName(String bridgeName) {
	    Bridge bridge = bridgeRepository.findByBridgeName(bridgeName);
	    if (bridge != null) {
	        return bridge.getId();
	    } else {
	        return null;
	    }
	}
  
  public void saveStadProFile(Long bridgeId, MultipartFile file) throws IOException {
      Optional<Bridge> optionalBridge = bridgeRepository.findById(bridgeId);
      if (optionalBridge.isPresent()) {
          Bridge bridge = optionalBridge.get();
          bridge.setStadproFileData(file.getBytes());
          bridge.setStadproFileName(file.getOriginalFilename());
          bridgeRepository.save(bridge);
      } else {
          throw new IllegalArgumentException("Bridge not found with id: " + bridgeId);
      }
  }

  public byte[] getStadProfile(Long bridgeId) throws IOException {
      Optional<Bridge> optionalBridge = bridgeRepository.findById(bridgeId);
      if (optionalBridge.isPresent()) {
          Bridge bridge = optionalBridge.get();
          return bridge.getStadproFileData();
      } else {
          throw new IllegalArgumentException("Bridge not found with id: " + bridgeId);
      }
  }
 
  public void deleteStandardProfile(Long bridgeId) throws IOException {
      Optional<Bridge> optionalBridge = bridgeRepository.findById(bridgeId);
      if (optionalBridge.isPresent()) {
          Bridge bridge = optionalBridge.get();
          bridge.setStadproFileData(null);
          bridge.setStadproFileName(null);
          bridgeRepository.save(bridge);
      } else {
          throw new IllegalArgumentException("Bridge not found with id: " + bridgeId);
      }
  }
   
}
