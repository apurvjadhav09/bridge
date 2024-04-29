package com.java.group.dto;

import java.util.List;

import com.java.group.entity.Bridge;
import com.java.group.entity.Sensor;

public class BridgeWithSensorsDTO {
	private Bridge bridge;
    private List<Sensor> sensors;

    public BridgeWithSensorsDTO(Bridge bridge, List<Sensor> sensors) {
        this.bridge = bridge;
        this.sensors = sensors;
    }

	public Bridge getBridge() {
		return bridge;
	}

	public void setBridge(Bridge bridge) {
		this.bridge = bridge;
	}

	public List<Sensor> getSensors() {
		return sensors;
	}

	public void setSensors(List<Sensor> sensors) {
		this.sensors = sensors;
	}
    
    
}
