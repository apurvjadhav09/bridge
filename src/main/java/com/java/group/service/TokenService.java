package com.java.group.service;

import java.util.Optional;


import com.java.group.entity.User;
import com.java.group.entity.UserVerificationToken;

public interface TokenService {
	
	String generateToken();

    void saveToken(User user, String token);

    Optional<UserVerificationToken> getToken(String token);

}
