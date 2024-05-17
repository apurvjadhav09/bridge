package com.java.group.controller;


import java.io.IOException;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.java.group.csvhandlerandexception.ResourceNotFoundException;
import com.java.group.dto.BridgeWithSensorsDTO;
import com.java.group.entity.Bridge;
import com.java.group.entity.Sensor;
import com.java.group.entity.User;
import com.java.group.repository.BridgeRepository;
import com.java.group.repository.SensorRepository;
import com.java.group.repository.UserRepository;
import com.java.group.response.RegistrationResponse;
import com.java.group.service.BridgeService;


import com.java.group.service.SensorService;


@RestController
@CrossOrigin(origins = "${app.base-url}")
@RequestMapping("/bridge")

public class BridgeController {
	private static final Logger logger = LoggerFactory.getLogger(BridgeController.class);
    

    @Autowired
    private BridgeService bridgeService;
    
    @Autowired
    private SensorService sensorService;
    
    @Autowired
    private BridgeRepository bridgeRepository;
    
    @Autowired
    private SensorRepository sensorRepository;
    
    @Autowired
    private UserRepository repository;
    
    @Autowired
    private HttpServletRequest request;
    
    public BridgeController() {
		super();
		logger.info("Fetching bridgecontroller{}");
//		  logger.info("Request URL: {}", request.getRequestURL());
//	        logger.info("Param1: {}, Param2: {}", request.getpa);
		
	}


    @GetMapping("/superbridges")
    public ResponseEntity<?> getBridgesBySuperadminId(@RequestParam Long superadminId) {
        try {
            logger.info("Fetching bridges for superadminId: {}", superadminId);
            List<Bridge> bridges = bridgeRepository.findBySuperadminId(superadminId);
            if (bridges == null || bridges.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("No bridges found for superadminId: " + superadminId);
            }
            return ResponseEntity.ok(bridges);
        } catch (Exception e) {
            logger.error("Failed to fetch bridges: {}", e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to fetch bridges: " + e.getMessage());
        }
    }

    
    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> registerBridge(@RequestBody Bridge bridge) {
        try {
            

            RegistrationResponse response = bridgeService.registerBridge(bridge);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            RegistrationResponse errorResponse = new RegistrationResponse();
            errorResponse.setMessage("Failed to register the bridge. User details do not match.");
            return ResponseEntity.status(400).body(errorResponse);
        } catch (Exception e) {
        	 logger.error("Failed to regsiter bridges: {}", e.getMessage());
            e.printStackTrace();
            RegistrationResponse errorResponse = new RegistrationResponse();
            errorResponse.setMessage("Failed to register the bridge. Please check your request.");
            return ResponseEntity.status(500).body(errorResponse);
        }
    }

 


    
    @GetMapping("/showbridge")
    public ResponseEntity<List<BridgeWithSensorsDTO>> showBridge(@RequestParam String email) {
        List<BridgeWithSensorsDTO> bridgesWithSensors = new ArrayList<>();

        User user = repository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        for (Long i = 1L; i <= 10L; i++) {
            Long bridgeId = getBridgeIdByIndex(user, i);
            String bridgeRole = getBridgeRoleByIndex(user, i);

            if (bridgeId != null && bridgeRole != null) {
                Optional<Bridge> optionalBridge = bridgeRepository.findById(bridgeId);
                optionalBridge.ifPresent(bridge -> {
                   
                    List<Sensor> sensors = sensorRepository.findByBridgeid(bridgeId);
                   
                    BridgeWithSensorsDTO bridgeWithSensors = new BridgeWithSensorsDTO(bridge, sensors);
                    bridgesWithSensors.add(bridgeWithSensors);
                });
            }
        }
        return bridgesWithSensors.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(bridgesWithSensors);
    }

    @GetMapping("/getallbridge")
    public ResponseEntity<List<Bridge>> getAllBridges() {
        try {
            List<Bridge> bridges = bridgeRepository.findAll();
            return ResponseEntity.ok(bridges != null ? bridges : Collections.emptyList());
        } catch (Exception e) {
            logger.error("Failed to show bridges: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getbridge/{id}")
    public ResponseEntity<?> getBridgeById(@PathVariable Long id) {
        try {
            Optional<Bridge> optionalBridge = bridgeRepository.findById(id);
            if (optionalBridge.isPresent()) {
                Bridge bridge = optionalBridge.get();
                return ResponseEntity.ok(bridge);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
        	 logger.error("Failed to getbridgeid bridges: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    
    @GetMapping("/bridgeid")
    public ResponseEntity<Long> findBridgeIdByName(@RequestParam String bridgeName) {
        Long bridgeId = bridgeService.findBridgeIdByName(bridgeName);
        if (bridgeId != null) {
            return ResponseEntity.ok(bridgeId);
        } else {
        	 logger.error("Failed to bridgeid  bridges: {}");
            return ResponseEntity.notFound().build();
        }
    }



    @PutMapping("/updatebridge/{bridgeId}")
    public ResponseEntity<RegistrationResponse> updateBridge(@PathVariable Long bridgeId, @RequestBody Bridge updatedBridge) {
        RegistrationResponse response = bridgeService.updateBridge(bridgeId, updatedBridge);
        if (response.getMessage().startsWith("Bridge not found")) {
        	 logger.error("Failed to updatebridge1 bridges: {}");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } else if (response.getMessage().startsWith("Error updating bridge")) {
        	 logger.error("Failed to updatebridge2 bridges:" );
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
//    @PostMapping("/uploadImage/{bridgeId}")
//    public ResponseEntity<RegistrationResponse> uploadImage(@PathVariable Long bridgeId, @RequestParam("file") MultipartFile file) {
//        try {
//            Optional<Bridge> bridgeOptional = bridgeRepository.findById(bridgeId);
//            if (!bridgeOptional.isPresent()) {
//                RegistrationResponse errorResponse = new RegistrationResponse();
//                errorResponse.setMessage("Bridge not found with ID: " + bridgeId);
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
//            }
//
//            Bridge bridge = bridgeOptional.get();
//
//            // Check if the uploaded file is in JPG or PNG format
//            if (!file.getContentType().equals("image/jpeg") && !file.getContentType().equals("image/png")) {
//                RegistrationResponse errorResponse = new RegistrationResponse();
//                errorResponse.setMessage("Only JPG and PNG images are supported.");
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//            }
//
//            // Convert the MultipartFile to byte array
//            byte[] imageData = file.getBytes();
//
//            // Update the imagePath field in the Bridge entity
//            bridge.setImagePath(imageData);
//            bridgeRepository.save(bridge);
//
//            RegistrationResponse response = new RegistrationResponse();
//            response.setMessage("Image uploaded successfully.");
//            return ResponseEntity.ok(response);
//        } catch (IOException e) {
//            RegistrationResponse errorResponse = new RegistrationResponse();
//            errorResponse.setMessage("Failed to upload image. Please try again.");
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
//        }
//    }
//

    @DeleteMapping("/deletebridge/{id}")
    public ResponseEntity<?> deleteBridge(@PathVariable Long id) {
        try {
            Optional<Bridge> optionalBridge = bridgeRepository.findById(id);
            if (optionalBridge.isPresent()) {
                Bridge bridge = optionalBridge.get();
                
           
                bridgeRepository.delete(bridge);
               

                updateUsersForBridgeDeletion(bridge.getAdminEmail(), id);
                updateUsersForBridgeDeletion(bridge.getAdminEmail2(), id);
                updateUsersForBridgeDeletion(bridge.getAdminEmail3(), id);
                
                updateUsersForBridgeDeletion(bridge.getManagerEmail(), id);
                updateUsersForBridgeDeletion(bridge.getManagerEmail2(), id);
                updateUsersForBridgeDeletion(bridge.getManagerEmail3(), id);
                updateUsersForBridgeDeletion(bridge.getManagerEmail4(), id);
                updateUsersForBridgeDeletion(bridge.getManagerEmail5(), id);
                updateUsersForBridgeDeletion(bridge.getManagerEmail6(), id);
                
                updateUsersForBridgeDeletion(bridge.getOwnerEmail(), id);
                updateUsersForBridgeDeletion(bridge.getOwnerEmail2(), id);
                updateUsersForBridgeDeletion(bridge.getOwnerEmail3(), id);
                
                
                List<Sensor> sensor = sensorRepository.findByBridgeid(id);
                if (sensor != null) {
                    sensorRepository.deleteAll(sensor);
                }

                return ResponseEntity.ok("Bridge and associated sensors removed successfully.");
            } else {
            	 logger.error("Failed to delete bridges: {}");
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
        	 logger.error("Failed to delete bridges: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    private void updateUsersForBridgeDeletion(String email, Long bridgeId) {
        User user = repository.findByEmail(email);
        if (user != null) {
            if (user.getBridgeid1() != null && user.getBridgeid1().equals(bridgeId)) {
                user.setBridgeid1(null);
                user.setBridgeRole1(null);
            }
            if (user.getBridgeid2() != null && user.getBridgeid2().equals(bridgeId)) {
                user.setBridgeid2(null);
                user.setBridgeRole2(null);
            }
            if (user.getBridgeid3() != null && user.getBridgeid3().equals(bridgeId)) {
                user.setBridgeid3(null);
                user.setBridgeRole3(null);
            }
            if (user.getBridgeid4() != null && user.getBridgeid4().equals(bridgeId)) {
                user.setBridgeid4(null);
                user.setBridgeRole4(null);
            }
            if (user.getBridgeid5() != null && user.getBridgeid5().equals(bridgeId)) {
                user.setBridgeid5(null);
                user.setBridgeRole5(null);
            }
            if (user.getBridgeid6() != null && user.getBridgeid6().equals(bridgeId)) {
                user.setBridgeid6(null);
                user.setBridgeRole6(null);
            }
            if (user.getBridgeid7() != null && user.getBridgeid7().equals(bridgeId)) {
                user.setBridgeid7(null);
                user.setBridgeRole7(null);
            }
            if (user.getBridgeid8() != null && user.getBridgeid8().equals(bridgeId)) {
                user.setBridgeid8(null);
                user.setBridgeRole8(null);
            }
            if (user.getBridgeid9() != null && user.getBridgeid9().equals(bridgeId)) {
                user.setBridgeid9(null);
                user.setBridgeRole9(null);
            }
            if (user.getBridgeid10() != null && user.getBridgeid10().equals(bridgeId)) {
                user.setBridgeid10(null);
                user.setBridgeRole10(null);
            }
        
            
            repository.save(user);
        } 
    }

    @PostMapping("/addSensorData/{bridgeId}")
    public ResponseEntity<RegistrationResponse> addSensorData(@PathVariable Long bridgeId, @RequestBody List<Sensor> sensors) {
        try {
            RegistrationResponse response = sensorService.addSensorData(sensors, bridgeId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            RegistrationResponse errorResponse = new RegistrationResponse();
            logger.error("Failed to addsensordata bridges: {}", e.getMessage());
            errorResponse.setMessage("Failed to add sensor data. Please check your request.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }


    
    @PutMapping("/updatesensor/{bridgeid}")
    public ResponseEntity<?> updateSensorByBridgeId( @PathVariable Long bridgeid, @RequestBody Sensor updatedSensor) {
        try {
          
            List<Sensor> optionalSensor = sensorRepository.findByBridgeid(bridgeid);
            if (!optionalSensor.isEmpty()) {
                Sensor sensor = optionalSensor.get(0);
                
                
                sensor.setSensortype(updatedSensor.getSensortype() != null ? updatedSensor.getSensortype() : sensor.getSensortype());
               
               sensor.setSpanno(updatedSensor.getSpanno()!= null? updatedSensor.getSpanno():sensor.getSpanno());
               sensor.setGirderno(updatedSensor.getGirderno()!= null ? updatedSensor.getGirderno():sensor.getGirderno());
               sensor.setManualLocation(updatedSensor.getManualLocation()!=null?updatedSensor.getManualLocation():sensor.getManualLocation());
               
                sensorRepository.save(sensor);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
        	 logger.error("Failed to updatesensordata bridges: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/delete/{bridgeid}")
    public ResponseEntity<?> deleteSensorByBridgeId( @PathVariable Long bridgeid) {
        try {
            
        	List<Sensor> optionalSensor = sensorRepository.findByBridgeid(bridgeid);
            if (!optionalSensor.isEmpty()) {
                Sensor sensor = optionalSensor.get(0);
                sensorRepository.delete(sensor);
                return ResponseEntity.ok().build();
            } else {
            	 logger.error("Failed to deletesensorid bridges: {}");
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
        	 logger.error("Failed to deletesensor bridges: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/getsensor/{id}")
    public ResponseEntity<?> getSensorData(@PathVariable Long id) {
        try {
            List<Sensor> sensors = sensorRepository.findByBridgeid(id);
            return !sensors.isEmpty() ? ResponseEntity.ok(sensors) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            logger.error("Failed to get sensor data for bridge with id {}: {}", id, e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getallsensor")
    public ResponseEntity<?> getSensorData() {
        try {
            List<Sensor> sensors = sensorRepository.findAll();
            return sensors.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(sensors);
        } catch (Exception e) {
            logger.error("Failed to get all sensor data: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    

    

    
    private Long getBridgeIdByIndex(User user, Long index) {
        switch (index.intValue()) {
            case 1: return user.getBridgeid1();
            case 2: return user.getBridgeid2();
            case 3: return user.getBridgeid3();
            case 4: return user.getBridgeid4();
            case 5: return user.getBridgeid5();
            case 6: return user.getBridgeid6();
            case 7: return user.getBridgeid7();
            case 8: return user.getBridgeid8();
            case 9: return user.getBridgeid9();
            case 10: return user.getBridgeid10();
            default: return null;
        }
    }

    private String getBridgeRoleByIndex(User user, Long index) {
        switch (index.intValue()) {
            case 1: return user.getBridgeRole1();
            case 2: return user.getBridgeRole2();
            case 3: return user.getBridgeRole3();
            case 4: return user.getBridgeRole4();
            case 5: return user.getBridgeRole5();
            case 6: return user.getBridgeRole6();
            case 7: return user.getBridgeRole7();
            case 8: return user.getBridgeRole8();
            case 9: return user.getBridgeRole9();
            case 10: return user.getBridgeRole10();
            default: return null;
        }
    }
    
    @PostMapping("/csv/{id}")
    public ResponseEntity<?> uploadCsvFile(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            Bridge bridge = bridgeRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Bridge not found with id " + id));

            if (bridge.getCsvFileName() != null && !bridge.getCsvFileName().isEmpty()) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("CSV file already exists for this bridge");
            }

//            // Validate file type
//            if (!file.getContentType().equals("text/csv")) {
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                        .body("Invalid file type. Only CSV files are allowed.");
//            }

            // Validate file size (10MB limit)
            if (file.getSize() > 10 * 1024 * 1024) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("File size exceeds the limit of 10MB.");
            }

            bridge.setCsvFileName(file.getOriginalFilename());
            bridge.setCsvFileData(file.getBytes());
            bridgeRepository.save(bridge);
            return ResponseEntity.ok("CSV file uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to upload CSV file: " + e.getMessage());
        }
    }

    @PutMapping("/updatecsv/{id}")
    public ResponseEntity<?> updateCsvFile(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            Bridge bridge = bridgeRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Bridge not found with id " + id));

           
            if (bridge.getCsvFileName() != null && !bridge.getCsvFileName().isEmpty()) {
                bridge.setCsvFileName(file.getOriginalFilename());
                bridge.setCsvFileData(file.getBytes());
                bridgeRepository.save(bridge);
                return ResponseEntity.ok("CSV file updated successfully");
            }

            
            if (file.getSize() > 10 * 1024 * 1024) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("File size exceeds the limit of 10MB.");
            }

            bridge.setCsvFileName(file.getOriginalFilename());
            bridge.setCsvFileData(file.getBytes());
            bridgeRepository.save(bridge);
            return ResponseEntity.ok("CSV file uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to update CSV file: " + e.getMessage());
        }
    }
    @GetMapping("/getcsv/{id}")
    public ResponseEntity<?> getCsvFile(@PathVariable Long id) {
        try {
            Bridge bridge = bridgeRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Bridge not found with id " + id));

            if (bridge.getCsvFileName() == null || bridge.getCsvFileName().isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("CSV file not found for this bridge");
            }

            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + bridge.getCsvFileName());
            headers.add(HttpHeaders.CONTENT_TYPE, "text/csv");

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(bridge.getCsvFileData());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to retrieve CSV file: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}/dcsv")
    public ResponseEntity<?> deleteCsvFile(@PathVariable Long id) {
        try {
            Bridge bridge = bridgeRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Bridge not found with id " + id));

            if (bridge.getCsvFileName() == null || bridge.getCsvFileName().isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("CSV file not found for this bridge");
            }

            bridge.setCsvFileName(null);
            bridge.setCsvFileData(null);
            bridgeRepository.save(bridge);
            return ResponseEntity.ok("CSV file deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to delete CSV file: " + e.getMessage());
        }
    }
    
    @PostMapping("/savestadpro/{bridgeId}")
    public ResponseEntity<String> saveStandardProfile(
            @PathVariable Long bridgeId,
            @RequestParam("file") MultipartFile file
    ) {
        try {
            bridgeService.saveStadProFile(bridgeId, file);
            return ResponseEntity.ok("StadPro file saved successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save standpro file: " + e.getMessage());
        }
    }
    @GetMapping("/getstadprofile/{bridgeId}")
    public ResponseEntity<byte[]> getStandardProfile(@PathVariable Long bridgeId) {
        try {
            byte[] fileData = bridgeService.getStadProfile(bridgeId);
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(fileData);
        } catch (IOException e) {
            String errorMessage = "Failed to retrieve stadpro file: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .contentType(MediaType.TEXT_PLAIN)
                    .body(errorMessage.getBytes());
        }
    }
    @DeleteMapping("/deletestadpro/{bridgeId}")
    public ResponseEntity<String> deleteStandardProfile(@PathVariable Long bridgeId) {
        try {
            bridgeService.deleteStandardProfile(bridgeId);
            return ResponseEntity.ok("Stadpro file deleted successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to delete standard profile file: " + e.getMessage());
        }
    }
}
