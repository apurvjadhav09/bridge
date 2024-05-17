package com.java.group.controller;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.java.group.entity.User;

import com.java.group.repository.UserRepository;
import com.java.group.request.PasswordSetupRequest;
import com.java.group.service.UserDetailsServiceImpl;

import com.java.group.util.JwtTokenUtil;



import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;

import java.util.Map;
import java.util.Set;
import java.util.UUID;


import javax.servlet.http.HttpServletRequest;



@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class UserController {
	
	 @Autowired
	    private AuthenticationManager authenticationManager;
	 
	 @Autowired
	    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserRepository repository;
    
   
 
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private HttpServletRequest request;
    
    
    public UserController() {
		super();
		logger.info("Fetching logincontorller{}");
//		  logger.info("Request URL: {}", request.getRequestURL());
	}


	@Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    
    
   
    
   
    private static Set<String> revokedTokens = new HashSet<>();
    
    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(user.getEmail());
            String token = jwtTokenUtil.generateToken(userDetails);
            User existingUser = repository.findByEmail(user.getEmail());
            existingUser.setUuid(UUID.randomUUID().toString());
            existingUser.setLastLogin(new Date());
            existingUser.setToken(token);
            repository.save(existingUser);

            String selectedRole = user.getSelectedRole();
            if (hasRequiredRole(userDetails, selectedRole)) {
                String dashboardUrl = getDashboardUrl(userDetails, selectedRole);
                String userRole = existingUser.getRole();
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Hi " + user.getEmail() + " welcome to DEXT IT SOLUTIONS... !");
                response.put("username", user.getEmail());
                response.put("id", existingUser.getId());
                response.put("name",existingUser.getName());
                response.put("role", userRole);
                response.put("uuid", UUID.randomUUID().toString());
                response.put("token", token);
                response.put("dashboardUrl", dashboardUrl);
                logger.info("logged in successfully..");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                logger.warn("Access forbidden for user with roles: {}", userDetails.getAuthorities());
                return ResponseEntity.status(403).body("Access forbidden");
            }

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("Incorrect email or password");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(401).body("Email is not valid. Please enter a correct email.");
        } catch (RuntimeException e) {
            if (e.getMessage().equals("Role is not matched")) {
                return ResponseEntity.status(403).body("Invalid role selected");
            } else {
                return ResponseEntity.status(500).body("check login credential once again. ");
            }
        }
    }

    private String getDashboardUrl(UserDetails userDetails, String selectedRole) {
        User user = repository.findByEmail(userDetails.getUsername());
        if (user == null) {
            return "/";
        }
        if (user.getRole() == null && selectedRole.equals("SUPERADMIN")) {
        	throw new RuntimeException("Role is not matched");
        }
        if (user.getRole() == null && selectedRole != null && isBridgeRole(selectedRole)&&isBridgeRoleMatched(user, selectedRole)) {
            return "/bridges";
        }
       
        if (selectedRole.equals("SUPERADMIN") && user.getRole().equals("SUPERADMIN")) {
            return "/home";
        }

        for (int i = 1; i <= 10; i++) {
            String bridgeRole = getBridgeRole(user, i);
            if (selectedRole != null && selectedRole.equals(bridgeRole)) {
                return "/bridges";
            }
        }

        throw new RuntimeException("Role is not matched"); // Return error message if role is not matched
    }
    private boolean isBridgeRoleMatched(User user, String selectedRole) {
        for (int i = 1; i <= 10; i++) {
            String bridgeRole = getBridgeRole(user, i);
            if (selectedRole.equals(bridgeRole)) {
                return true;
            }
        }
        return false;
    }
    private boolean hasRequiredRole(UserDetails userDetails, String selectedRole) {
        return userDetails.getAuthorities().isEmpty() ||
                userDetails.getAuthorities().stream().anyMatch(authority ->
                                              authority.getAuthority().equals("ROLE_SUPERADMIN")) ||
                (userDetails.getAuthorities().isEmpty() && selectedRole != null && isBridgeRole(selectedRole));
    }

    private boolean isBridgeRole(String role) {
        // Assuming bridge roles are "bridge-owner", "bridge-manager", and "bridge-admin"
        return role.equals("bridge-owner") || role.equals("bridge-manager") || role.equals("bridge-admin");
    }


    private String getBridgeRole(User user, int index) {
        switch (index) {
            case 1: return user.getBridgeRole1();
            case 2: return user.getBridgeRole2();
            case 3: return user.getBridgeRole3();
            case 4: return user.getBridgeRole4();
            case 5: return user.getBridgeRole5();
            case 6: return user.getBridgeRole6();
            case 7: return user.getBridgeRole7();
            case 8: return user.getBridgeRole8();
            case 9: return user.getBridgeRole9();
            case 10: return user.getBridgeRole10();
            default: return null;
        }
    }
//
//  

   
    


    @PostMapping("/setupnewpassword")
    public ResponseEntity<?> setupNewPassword(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestBody PasswordSetupRequest passwordSetupRequest) {
        try {
            String token = authorizationHeader.substring(7); 

            if (revokedTokens.contains(token)) {
                return ResponseEntity.status(401).body("Invalid or expired token");
            }

            String emailtoken = jwtTokenUtil.extractUsername(token);

            User user = repository.findByEmail(emailtoken);

            if (user == null) {
                return ResponseEntity.status(404).body("User not found");
            }

            if (passwordSetupRequest.getCurrentPassword().equals(user.getPassword())) {
                if (passwordSetupRequest.getNewPassword().equals(passwordSetupRequest.getNewPasswordAgain())) {
                    user.setPassword(passwordSetupRequest.getNewPassword());
                    repository.save(user);
                    return ResponseEntity.ok("Password updated successfully");
                } else {
                    return ResponseEntity.status(400).body("New password and confirm password do not match");
                }
            } else {
                return ResponseEntity.status(401).body("Incorrect current password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error");
        }
    }

    




    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        String token = jwtTokenUtil.extractTokenFromHeader(request.getHeader("Authorization"));
        if (token != null && jwtTokenUtil.validateToken(token)) {
            revokedTokens.add(token);
            SecurityContextHolder.clearContext();
            return ResponseEntity.ok("Logout successful");
        } else {
        	 logger.error("Failed to logout bridges: {}");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token");
        }
    }

    
    @PostMapping("/masterlogin")
    public ResponseEntity<?> createDeveloperAuthenticationToken(@RequestBody User user) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(user.getEmail());
            if (userDetails.getAuthorities().stream().anyMatch(authority -> authority.getAuthority().equals("ROLE_DEVELOPER"))) {
                String token = jwtTokenUtil.generateToken(userDetails);
                User existingUser = repository.findByEmail(user.getEmail());
                existingUser.setUuid(UUID.randomUUID().toString());
                existingUser.setLastLogin(new Date());
                existingUser.setToken(token);
                repository.save(existingUser);

                String userRole = existingUser.getRole();

                Map<String, Object> response = new HashMap<>();
                response.put("message", "Hi " + user.getEmail() + " welcome to DEXT IT SOLUTIONS... !");
                response.put("username", user.getEmail());
                response.put("id", existingUser.getId());
                response.put("role", userRole);
                response.put("uuid", UUID.randomUUID().toString());
                response.put("token", token);
                response.put("dashboardUrl", "/masterhome");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                return ResponseEntity.status(403).body("Access forbidden");
            }

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("Incorrect email or password");
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(401).body("Email is not valid. Please enter a correct email.");
        } catch (RuntimeException e) {
            if (e.getMessage().equals("Role is not matched")) {
                return ResponseEntity.status(403).body("Invalid role selected");
            } else {
                return ResponseEntity.status(500).body("check login credential once again. ");
            }
        }
    }

  
}



    