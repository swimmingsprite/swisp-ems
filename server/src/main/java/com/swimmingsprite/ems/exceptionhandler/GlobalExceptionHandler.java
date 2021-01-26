package com.swimmingsprite.ems.exceptionhandler;

import com.swimmingsprite.ems.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.authentication.exception.UserNotFoundException;
import com.swimmingsprite.ems.authorization.exception.AccessDeniedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            ExpiredTokenException.class,
            InvalidCredentialsException.class,
            UnknownTokenException.class,
            UserNotFoundException.class})
    public final ResponseEntity<SimpleMessage> handleException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({
            AccessDeniedException.class})
    public final ResponseEntity<SimpleMessage> handleAccessDeniesException(Exception e) {
        return new ResponseEntity<>(new SimpleMessage(e.getMessage()), HttpStatus.UNAUTHORIZED);
    }

}
