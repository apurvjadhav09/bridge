package com.java.group.service;

import java.time.LocalDateTime;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.group.entity.User;
import com.java.group.entity.UserVerificationToken;
import com.java.group.repository.UserRepository;
import com.java.group.repository.UserVerificationTokenRepository;

@Service
public class TokenServiceImpl implements TokenService {
    
	 @Autowired
	    private UserVerificationTokenRepository tokenRepository;
	 
	 @Autowired
	 private UserRepository repository;
	
	
	
	@Override
	public String generateToken() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveToken(User user, String token) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Optional<UserVerificationToken> getToken(String token) {
		// TODO Auto-generated method stub
		return tokenRepository.findByToken(token);
	}
	
	 public void createPasswordResetToken(User user, String token) {
	        UserVerificationToken passwordResetToken = new UserVerificationToken();
	        passwordResetToken.setToken(token);
	        passwordResetToken.setUser(user);
	        passwordResetToken.setExpiryDateTime(LocalDateTime.now().plusHours(24)); 
	        tokenRepository.save(passwordResetToken);
	    }

	    public boolean isTokenValid(String token) {
	        Optional<UserVerificationToken> optionalToken = tokenRepository.findByToken(token);
	        return optionalToken.isPresent() && !optionalToken.get().getExpiryDateTime().isBefore(LocalDateTime.now());
	    }

	    public void resetPassword(String token, String newPassword) {
	        Optional<UserVerificationToken> optionalToken = tokenRepository.findByToken(token);
	        if (optionalToken.isPresent()) {
	            User user = optionalToken.get().getUser();
	            user.setPassword(newPassword);
	            repository.save(user);
	            tokenRepository.delete(optionalToken.get());
	        }
	        
	    }
	    public void deleteUserVerificationToken(UserVerificationToken token) {
	        tokenRepository.delete(token);
	    }
}
