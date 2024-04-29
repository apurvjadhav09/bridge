package com.java.group.entity;

import javax.persistence.Entity;


import java.time.LocalDateTime;

import javax.persistence.*;

@Entity

public class UserVerificationToken {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;
    
    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    private LocalDateTime expiryDateTime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDateTime getExpiryDateTime() {
		return expiryDateTime;
	}

	public void setExpiryDateTime(LocalDateTime expiryDateTime) {
		this.expiryDateTime = expiryDateTime;
	}

	public UserVerificationToken(Long id, String token, User user, LocalDateTime expiryDateTime) {
		super();
		this.id = id;
		this.token = token;
		this.user = user;
		this.expiryDateTime = expiryDateTime;
	}

	public UserVerificationToken() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    

}
