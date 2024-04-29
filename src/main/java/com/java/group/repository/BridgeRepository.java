package com.java.group.repository;








import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.java.group.entity.Bridge;


public interface BridgeRepository extends JpaRepository<Bridge, Long> {

	Optional<Bridge> findById(Long id);
	Bridge findByBridgeName(String bridgeName);
	
	 @Modifying
	    @Query(value = "DELETE FROM Bridge WHERE id = :id", nativeQuery = true)
	    int deleteBridgeById(@Param("id") Long id);
	
	 List<Bridge> findBySuperadminId(Long superadminId);
	
    
    
   

}
