package com.java.group.service;

import java.util.List;

import com.java.group.entity.Sensor;



import com.java.group.response.RegistrationResponse;

public interface SensorService {
	
//	RegistrationResponse addSensorData(Sensor sensor,Long bridgeId);

	RegistrationResponse addSensorData(List<Sensor> sensors, Long bridgeId);

}
