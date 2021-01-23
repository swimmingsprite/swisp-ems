package com.swimmingsprite.ems.exceptionhandler;

import java.time.Instant;

public class SimpleMessage {
    private long timestamp;
    private String message;

    public SimpleMessage(String message) {
        this.timestamp = Instant.now().toEpochMilli();
        this.message = message;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }
}
