package com.java.group.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {
	
	void uploadFile(MultipartFile file);

}
