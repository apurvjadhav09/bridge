package com.java.group.entity;

import javax.persistence.*;

@Entity
@Table(name = "span_girder_tbl")
public class SpanGirder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long bridgeid;

    private Long spanno;

    private Long girderCount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public Long getBridgeid() {
		return bridgeid;
	}

	public void setBridgeid(Long bridgeid) {
		this.bridgeid = bridgeid;
	}

	public Long getSpanno() {
		return spanno;
	}

	public void setSpanno(Long spanno) {
		this.spanno = spanno;
	}

	public Long getGirderCount() {
		return girderCount;
	}

	public void setGirderCount(Long girderCount) {
		this.girderCount = girderCount;
	}

 
    
    // getters and setters
}

