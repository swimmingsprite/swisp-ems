package com.swimmingsprite.ems.authentication.exception;

public class UnknownTokenException extends RuntimeException {
    public UnknownTokenException(String message) {
        super(message);
    }
}
