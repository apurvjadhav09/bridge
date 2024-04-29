package com.java.group.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.group.entity.Sensor;

@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long> {
   
    Sensor findById(long id);

	List<Sensor> findByBridgeid(Long bridgeid);

	int deleteAllByBridgeid(Long bridgeid);
    
   

 // Find sensors by type
//    List<Sensor> findBySensorType(String sensorType);
    

    
}
