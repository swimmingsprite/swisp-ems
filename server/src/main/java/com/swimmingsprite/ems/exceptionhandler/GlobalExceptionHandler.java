package com.swimmingsprite.ems.exceptionhandler;

import com.swimmingsprite.ems.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.authentication.exception.NotFoundException;
import com.swimmingsprite.ems.authorization.exception.AccessDeniedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.security.InvalidParameterException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            ExpiredTokenException.class,
            InvalidCredentialsException.class,
            UnknownTokenException.class,
            NotFoundException.class})
    public final ResponseEntity<SimpleMessage> handleException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({
            NotFoundException.class})
    public final ResponseEntity<SimpleMessage> handleNotFoundException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({
            AccessDeniedException.class})
    public final ResponseEntity<SimpleMessage> handleAccessDeniesException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.UNAUTHORIZED);
    }

}
