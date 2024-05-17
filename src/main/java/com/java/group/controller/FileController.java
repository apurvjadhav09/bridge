package com.java.group.controller;






import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.java.group.excel.ExcelMethod;

import com.java.group.service.ServiceFile;



@RestController
@CrossOrigin(origins = "${app.base-url}")
@RequestMapping("/files")

public class FileController {

	private static final Logger logger = LoggerFactory.getLogger(FileController.class);
	@Autowired
	private ServiceFile serviceFile;

	 @Autowired
	    private HttpServletRequest request;
	    
	    
	    public FileController() {
			super();
			logger.info("Fetching logincontorller{}");
//			  logger.info("Request URL: {}", request.getRequestURL());
		}
	
	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
	    try {
	        if (ExcelMethod.checkExcelFormat(file)) {
	            ResponseEntity<String> response = this.serviceFile.save(file);

	            if (response.getStatusCode() == HttpStatus.OK) {
	                return ResponseEntity.ok(Map.of("message", "File is uploaded successfully and data is inserted."));
	            } else {
	                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response.getBody());
	            }
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload an Excel file.");
	        }
	    } catch (Exception e) {
	        e.printStackTrace();

	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Failed to process the file. Please try again later.");
	    }
	}




}
