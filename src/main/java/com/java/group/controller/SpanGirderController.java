package com.java.group.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.java.group.entity.SpanGirder;
import com.java.group.service.SpanGirderService;

import java.util.List;

@RestController
@CrossOrigin(origins = "${app.base-url}")
@RequestMapping("/spangirder")
public class SpanGirderController {
    @Autowired
    private SpanGirderService service;

    @GetMapping("/getspangirders/{bridgeid}")
    public ResponseEntity<List<SpanGirder>> getAllSpansAndGirdersByBridgeId(@PathVariable Long bridgeid) {
        List<SpanGirder> spansAndGirders = service.getAllSpansAndGirdersByBridgeId(bridgeid);
        return new ResponseEntity<>(spansAndGirders, HttpStatus.OK);
    }

    @PostMapping("/savespangirder/{bridgeid}")
    public ResponseEntity<String> saveSpanGirder(@PathVariable Long bridgeid, @RequestBody SpanGirder spanGirder) {
        SpanGirder savedSpanGirder = service.saveSpanGirder(bridgeid, spanGirder);
        if(savedSpanGirder != null) {
            return new ResponseEntity<>("Span and girders added successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to add span and girders", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updatespangirder/{bridgeid}")
    public ResponseEntity<String> updateSpanGirdersByBridgeId(@PathVariable Long bridgeid, @RequestBody List<SpanGirder> spanGirders) {
        service.updateSpanGirdersByBridgeId(bridgeid, spanGirders);
        return new ResponseEntity<>("Span and girders updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/deletespan/{bridgeid}")
    public ResponseEntity<String> deleteSpanGirdersByBridgeId(@PathVariable Long bridgeid) {
        service.deleteSpanGirdersByBridgeId(bridgeid);
        return new ResponseEntity<>("Span and girders deleted successfully", HttpStatus.OK);
    }

}

