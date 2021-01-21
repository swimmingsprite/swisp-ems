package com.swimmingsprite.authentication;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.authentication.exception.UnknownTokenException;

public interface AuthenticationManager {
    Token login(String login, String password) throws InvalidCredentialsException;
    Token refresh(String refreshToken) throws UnknownTokenException;
    void logout(String token) throws UnknownTokenException;
    String getUserId(String token) throws UnknownTokenException, ExpiredTokenException;
}
