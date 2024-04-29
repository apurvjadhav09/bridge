package com.java.group.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.java.group.entity.User;
import com.java.group.repository.UserRepository;
import com.java.group.service.PassMailService;
import com.java.group.service.UserService;




@RestController
@CrossOrigin(origins = "${app.base-url}")
@RequestMapping("/masterhome")
public class MasterController {
	
	@Autowired
	private PassMailService mailService;
	
	@Autowired
	private UserRepository repository;
	
	
	 @Autowired
	    private UserService userService;
	
	 
	
	 @PostMapping("/register")
	 public ResponseEntity<Map<String, String>> registerSuperadmin(@RequestBody User user) {
		    Map<String, String> response = new HashMap<>();
		    try {
		        if (repository.existsByEmail(user.getEmail())) {
		            response.put("status", "error");
		            response.put("message", "Email already exists. Please choose a different email.");
		            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		        }

		       
		        String resetToken = generateResetToken();
		        String generatedPassword = generateRandomPassword();

		        user.setPassword(generatedPassword);
		        user.setPasswordResetRequired(true);
		        user.setResettoken(resetToken);
//                 user.setCountryCode(user.getCountryCode());
                 
		        repository.save(user);

		        mailService.sendPasswordResetEmail(resetToken, user.getEmail());

		        response.put("status", "success");
		        response.put("message", "Superadmin registered successfully. Check your email for registration details.");
		        return ResponseEntity.ok(response);
		    } catch (Exception e) {
		        response.put("status", "error");
		        response.put("message", "An error occurred while processing your registration.");
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		    }
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
	

    @PutMapping("/update/{email}")
    public ResponseEntity<User> updateUserByEmail(@PathVariable String email, @RequestBody User updatedUser) {
        try {
            User updatedUserData = userService.updateUserByEmail(email, updatedUser);
            return ResponseEntity.ok(updatedUserData);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{email}")
    public ResponseEntity<String> deleteUserByEmail(@PathVariable String email) {
        try {
            userService.deleteUserByEmail(email);
            return ResponseEntity.ok("User with email " + email + " deleted successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/getuserdata")
//    @Transactional
    public List<User> getAllUserData() {
    	 List<User> users = repository.findAll();
    	 users = users.stream()
                 .filter(user -> user.getRole() == null|| user.getRole().equals("SUPERADMIN"))
                 .collect(Collectors.toList());
    	 users.removeIf(user -> "master@gmail.com".equals(user.getEmail()));
    	 return users;
    }
    
    @GetMapping("/getdata/byrole")
    public ResponseEntity<List<User>> getUsersByRole(@RequestParam String role) {
        List<User> users = userService.getUsersByRole(role);
        return ResponseEntity.ok(users);
    }


	@GetMapping("/findUser/{email}")
	public ResponseEntity<?> findUserIdByEmail(@PathVariable String email) {
	    User user = repository.findByEmail(email);
	    if (user == null) {
	        return ResponseEntity.notFound().build();
	    }

	    return ResponseEntity.ok(user.getId());
	}
	
	 @PostMapping("/addSuperadmin/{userId}")
	    public ResponseEntity<?> addSuperAdminRole(@PathVariable Long userId) {
	        Optional<User> optionalUser = repository.findById(userId);
	        if (!optionalUser.isPresent()) {
	            return ResponseEntity.notFound().build();
	        }

	        User user = optionalUser.get();
	        user.setRole("SUPERADMIN");
	        repository.save(user);

	        return ResponseEntity.ok("Superadmin role added successfully");
	    }

	    @PostMapping("/removeSuperadmin/{userId}")
	    public ResponseEntity<?> removeSuperAdminRole(@PathVariable Long userId) {
	        Optional<User> optionalUser = repository.findById(userId);
	        if (!optionalUser.isPresent()) {
	            return ResponseEntity.notFound().build();
	        }

	        User user = optionalUser.get();
	        user.setRole(null); // Assuming you want to remove the SUPERADMIN role completely
	        repository.save(user);

	        return ResponseEntity.ok("Superadmin role removed successfully");
	    }
	    
	    @GetMapping("userdata/{id}")
	    public ResponseEntity<User> getUserById(@PathVariable Long id) {
	        Optional<User> userOptional = repository.findById(id);
	        return userOptional.map(user -> ResponseEntity.ok().body(user))
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }
	   
	  
	   

}
