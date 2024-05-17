package com.java.group.service;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.group.entity.User;
import com.java.group.repository.UserRepository;

import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;
import java.util.Collections;


@Service
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {
    
	
	@Autowired
	private UserRepository repository;
    
	@Autowired
	private PasswordEncoder customPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    	User user = repository.findByEmail(email);
        if (user == null) {
        	
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        String encodedPassword = customPasswordEncoder.encode(user.getPassword());

       
        Collection<? extends GrantedAuthority> authorities = getAuthorities(user.getRole());

        return new CustomUserDetails(
                user.getUsername(),
                encodedPassword,
                user.getEmail(),
                authorities);
       
    }
    
  

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
    	if(role!= null) {
    		
    		return Collections.singletonList(new SimpleGrantedAuthority("ROLE_"+role.toUpperCase()));
    	}else {
    		return Collections.emptyList();
    	}
    }
}