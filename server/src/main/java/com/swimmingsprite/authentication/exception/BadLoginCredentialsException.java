package com.swimmingsprite.authentication.exception;

public class BadLoginCredentialsException extends RuntimeException {
    public BadLoginCredentialsException(String message) {
        super(message);
    }
}
