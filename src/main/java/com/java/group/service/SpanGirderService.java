package com.java.group.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.group.entity.SpanGirder;
import com.java.group.repository.spangirderrepo;

import java.util.List;

@Service
public class SpanGirderService {
    @Autowired
    private spangirderrepo repository;

    public List<SpanGirder> getAllSpansAndGirdersByBridgeId(Long bridgeid) {
        return repository.findByBridgeid(bridgeid);
    }

    public SpanGirder saveSpanGirder(Long bridgeid, SpanGirder spanGirder) {
        spanGirder.setBridgeid(bridgeid);
        return repository.save(spanGirder);
    }

    public void deleteSpanGirdersByBridgeId(Long bridgeid) {
        List<SpanGirder> spanGirders = repository.findByBridgeid(bridgeid);
        repository.deleteAll(spanGirders);
    }

    public void updateSpanGirdersByBridgeId(Long bridgeid, List<SpanGirder> spanGirders) {
        // Get existing span girders for the bridge
        List<SpanGirder> existingSpanGirders = repository.findByBridgeid(bridgeid);

        // Update existing span girders and remove them from the list
        for (SpanGirder existingSpanGirder : existingSpanGirders) {
            for (SpanGirder spanGirder : spanGirders) {
                if (existingSpanGirder.getId().equals(spanGirder.getId())) {
                    existingSpanGirder.setSpanno(spanGirder.getSpanno());
                    existingSpanGirder.setGirderCount(spanGirder.getGirderCount());
                    repository.save(existingSpanGirder);
                    spanGirders.remove(spanGirder);
                    break;
                }
            }
        }

        // Save new span girders
        for (SpanGirder spanGirder : spanGirders) {
            spanGirder.setBridgeid(bridgeid);
            repository.save(spanGirder);
        }
    }

}

