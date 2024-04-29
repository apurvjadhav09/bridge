package com.java.group.service;

import org.springframework.security.core.GrantedAuthority;



import java.util.Collection;


public class CustomUserDetails extends org.springframework.security.core.userdetails.User {

    private final String email;

    public CustomUserDetails(String username, String password, String email, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    
}
