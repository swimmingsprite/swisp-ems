package com.swimmingsprite.ems.authentication;

import com.swimmingsprite.ems.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import org.springframework.stereotype.Component;

@Component
public interface AuthenticationManager {
    Token login(String login, String password) throws InvalidCredentialsException;
    Token refresh(String refreshToken) throws UnknownTokenException;
    void logout(String token) throws UnknownTokenException;
    String getUserId(String token) throws UnknownTokenException, ExpiredTokenException;
}
