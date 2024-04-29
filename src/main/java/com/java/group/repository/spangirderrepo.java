package com.java.group.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.java.group.entity.SpanGirder;

public interface spangirderrepo extends JpaRepository<SpanGirder, Long> {
	
	List<SpanGirder> findByBridgeid(Long bridgeid);

}
