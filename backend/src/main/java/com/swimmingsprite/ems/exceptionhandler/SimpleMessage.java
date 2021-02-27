package com.swimmingsprite.ems.exceptionhandler;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Instant;

public final class SimpleMessage {
    private long timestamp;
    private String message;

    public SimpleMessage(String message) {
        this.timestamp = Instant.now().toEpochMilli();
        this.message = message;
    }

    public static void setSimpleMessageResponse(HttpServletResponse response, int code, String message) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        response.setStatus(code);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter()
                .write(objectMapper
                        .writeValueAsString(new SimpleMessage(message)));
    }

    public long getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }
}
