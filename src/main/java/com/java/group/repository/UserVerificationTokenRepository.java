package com.java.group.repository;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;

import com.java.group.entity.UserVerificationToken;

public interface UserVerificationTokenRepository extends JpaRepository<UserVerificationToken, Long>  {
            
	Optional<UserVerificationToken> findByToken(String token);
}
