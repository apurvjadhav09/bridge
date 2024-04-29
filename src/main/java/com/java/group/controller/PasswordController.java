package com.java.group.controller;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.java.group.service.UserService;

@RestController
@RequestMapping("/password")
public class PasswordController {

    @Autowired
    private UserService userService;

    @PostMapping("/forgot")
    public ResponseEntity<String> forgotPassword(@RequestParam String email) {
        try {
            
            userService.initiatePasswordChange(email);
            return ResponseEntity.ok("Password change process initiated. Check your email for instructions.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to initiate password change process.");
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyCode(@RequestParam String email, @RequestParam String code) {
        try {
            
            userService.verifyEmailCode(email, code);
            return ResponseEntity.ok("Email verification successful. Proceed to change password.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to verify email code.");
        }
    }

    
}

