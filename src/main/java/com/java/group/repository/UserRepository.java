package com.java.group.repository;

import java.util.List;

import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.java.group.entity.User;



public interface UserRepository extends JpaRepository<User,Integer> {
	
	

    
    User findByEmail(String email);
    List<User> findByRole(String role);
    
    User findByResettoken(String token);
    
    Optional<User> findById(Long id);
    
    List<User> findAllByEmail(String email);
    boolean existsByEmail(String email);

	boolean existsByName(String name);
    
    
    
	@Query("SELECT u FROM User u WHERE u.bridgeRole1 = :role OR u.bridgeRole2 = :role OR u.bridgeRole3 = :role OR u.bridgeRole4 = :role OR u.bridgeRole5 = :role OR u.bridgeRole6 = :role OR u.bridgeRole7 = :role OR u.bridgeRole8 = :role OR u.bridgeRole9 = :role OR u.bridgeRole10 = :role")
    List<User> findByBridgeRole(String role);
	}