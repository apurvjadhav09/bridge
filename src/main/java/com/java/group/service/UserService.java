package com.java.group.service;





import java.util.*;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.java.group.entity.User;
import com.java.group.repository.UserRepository;





@Service
public class UserService {

    

    @Autowired
    private EmailService emailService;
    
    @Autowired
    private UserRepository repository;

    private static final Map<String, String> emailVerificationCodes = new HashMap<>();

    public void initiatePasswordChange(String email) {
       
        String verificationCode = generateVerificationCode();

      
        emailVerificationCodes.put(email, verificationCode);

        
        sendVerificationCodeByEmail(email, verificationCode);
    }
    

    public void verifyEmailCode(String email, String code) {
       
        String storedCode = emailVerificationCodes.get(email);


        if (storedCode == null || !storedCode.equals(code)) {
            throw new RuntimeException("Invalid verification code.");
        }

        emailVerificationCodes.remove(email);
    }
    

   
    
    
    
  
    
    private String generateVerificationCode() {
        
        return UUID.randomUUID().toString().substring(0, 6).toUpperCase();
    }

    private void sendVerificationCodeByEmail(String email, String verificationCode) {
       
    	String subject = "Verification Code";
    	String emailContent = "Your verification code is: " + verificationCode;
        System.out.println("Sending email to " + email + ": " + emailContent);
        
        emailService.sendEmail(email, subject, emailContent);

        
    }
    
    public List<User> getUsersByRole(String role) {
        if ("SUPERADMIN".equals(role.toUpperCase())) {
            return repository.findByRole(role);
        }
        return Collections.emptyList(); // Return empty list for non-SUPERADMIN roles
    }
  
    
    public User updateUserByEmail(String email, User updatedUser) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new EntityNotFoundException("User with email " + email + " not found");
        }

        // Update the fields of the user entity
        if (updatedUser.getName() != null) {
            user.setName(updatedUser.getName());
        }
        if (updatedUser.getRole() != null) {
            user.setRole(updatedUser.getRole());
        }
        if (updatedUser.getCompanyname() != null) {
            user.setCompanyname(updatedUser.getCompanyname());
        }
        if(updatedUser.getPhonenumber()!=null) {
        	user.setPhonenumber(updatedUser.getPhonenumber());
        }
        // Update other fields as needed

        return repository.save(user);
    }
    public void deleteUserByEmail(String email) {
        User user = repository.findByEmail(email);
        if (user == null) {
            throw new EntityNotFoundException("User with email " + email + " not found");
        }
        repository.delete(user);
    }

}