package com.swimmingsprite.exceptionhandler;

import com.swimmingsprite.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.exception.UnknownTokenException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            ExpiredTokenException.class,
            InvalidCredentialsException.class,
            UnknownTokenException.class})
    public final ResponseEntity<SimpleMessage> handleException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

}
