package com.swimmingsprite.ems.exceptionhandler;

import com.swimmingsprite.ems.authentication.exception.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            InvalidCredentialsException.class,
            UnknownTokenException.class})
    public final ResponseEntity<SimpleMessage> handleException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({
            NotFoundException.class})
    public final ResponseEntity<SimpleMessage> handleNotFoundException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({
            ExpiredTokenException.class,
            AccessDeniedException.class})
    public final ResponseEntity<SimpleMessage> handleAccessDeniesException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.UNAUTHORIZED);
    }

}
