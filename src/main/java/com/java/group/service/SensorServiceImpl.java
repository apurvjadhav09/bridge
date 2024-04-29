package com.java.group.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import com.java.group.entity.Bridge;
import com.java.group.entity.Sensor;
import com.java.group.repository.BridgeRepository;
import com.java.group.repository.SensorRepository;

import com.java.group.response.RegistrationResponse;

@Service
public class SensorServiceImpl implements SensorService {
	
	   @Autowired
	    private SensorRepository sensorRepository;
	   
	   @Autowired
	   private BridgeRepository bridgeRepository;

	   @Override
	   public RegistrationResponse addSensorData(List<Sensor> sensors, Long bridgeId) {
	       try {
	           Bridge bridge = bridgeRepository.findById(bridgeId).orElse(null);
	           if (bridge == null) {
	               RegistrationResponse errorResponse = new RegistrationResponse();
	               errorResponse.setMessage("Bridge not found with ID: " + bridgeId);
	               return errorResponse;
	           }

	           for (Sensor sensor : sensors) {
	               sensor.setBridgeid(bridge.getId());
	               sensor.setSensortype(sensor.getSensortype());
//	             sensor.setBridgesensorsrno(sensor.getBridgesensorsrno());
	             sensor.setSpanno(sensor.getSpanno());
	             sensor.setGirderno(sensor.getGirderno());
	             sensor.setManualLocation(sensor.getManualLocation());

	               sensorRepository.save(sensor);
	           }

	           RegistrationResponse response = new RegistrationResponse();
	           response.setMessage("Sensor data added successfully.");
	           return response;
	       } catch (Exception e) {
	           RegistrationResponse errorResponse = new RegistrationResponse();
	           errorResponse.setMessage("Failed to add sensor data. Please check your request.");
	           return errorResponse;
	       }
	   }
}

