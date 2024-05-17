package com.java.group.controller;

import java.util.Collections;

import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.java.group.entity.User;
import com.java.group.repository.UserRepository;
import com.java.group.service.PassMailService;


@RestController
@CrossOrigin(origins = "${app.base-url}")
@RequestMapping("/newuser")
public class PasswordResetController {

	private static final Logger logger = LoggerFactory.getLogger(PasswordResetController.class);
	
    @Autowired
    private UserRepository repository;
    
    @Autowired
	private PassMailService mailService;
    
    @Autowired
    private HttpServletRequest request;
    
    public PasswordResetController() {
		super();
		logger.info("Fetching bridgecontroller{}");
//		  logger.info("Request URL: {}", request.getRequestURL());
//	        logger.info("Param1: {}, Param2: {}", request.getpa);
		
	}

    @CrossOrigin(origins = "${app.base-url}")
    @PostMapping("/resetpassword")
    public ResponseEntity<String> resetPassword(
            @RequestParam String token,
            @RequestBody ResetPasswordRequest resetPasswordRequest) {
    	

        String newPassword = resetPasswordRequest.getNewPassword();
        String confirmNewPassword = resetPasswordRequest.getConfirmNewPassword();

        if (!newPassword.equals(confirmNewPassword)) {
            return ResponseEntity.badRequest().body("New password and confirm password do not match");
        }

        User user = repository.findByResettoken(token);

        if (user == null || !user.isPasswordResetRequired()) {
        	System.out.println("reset token not matched ");
            return ResponseEntity.badRequest().body("Invalid or expired token");
        }

        


       
        user.setPassword(newPassword);
        user.setPasswordResetRequired(false);
        user.setResettoken(null);
        repository.save(user);

        return ResponseEntity.ok("Password reset successfully");
    }
    

    @PostMapping("/forgotpassword")
    public ResponseEntity<Map<String, String>> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Email is required"));
        }
        User user = repository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "User with email " + email + " not found"));
        }

        String resetToken = generateResetToken();
        user.setPasswordResetRequired(true);
        user.setResettoken(resetToken);
        repository.save(user);

        try {
            mailService.sendForgotPasswordResetEmail(resetToken, email);
            return ResponseEntity.ok(Collections.singletonMap("message", "Reset password link sent to " + email));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error", "Failed to send reset password link"));
        }
    }


    private String generateResetToken() {
		 String randomUUID = UUID.randomUUID().toString();
		 long timestamp = System.currentTimeMillis();
		    String resetToken = randomUUID + "-" + timestamp;
       return resetToken;
   }
}