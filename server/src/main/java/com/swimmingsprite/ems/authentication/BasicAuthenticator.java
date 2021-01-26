package com.swimmingsprite.ems.authentication;

import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.authentication.login.LoginAuthenticator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import java.util.Optional;

@Component
public class BasicAuthenticator implements AuthenticationManager {
    @Autowired
    LoginAuthenticator loginAuthenticator;
    @Autowired
    TokenService tokenService;

    @Autowired
    EntityManager entityManager;

    @Override
    public Token login(String login, String password) {
        if (login == null || password == null)
            throw new InvalidCredentialsException("Login and password can't be empty!");
        String userId = Optional
                .ofNullable(loginAuthenticator.validate(login, password))
                .orElseThrow(() -> new InvalidCredentialsException("Wrong login or password!"));

        return tokenService.generateToken(userId);
    }

    @Override
    public Token refresh(String refreshToken) {
        if (refreshToken == null) throw new UnknownTokenException("Token not present!");
        return tokenService.refreshToken(refreshToken);
    }

    @Override
    public void logout(String token) {
        if (token == null) throw new UnknownTokenException("Token not present!");
        tokenService.removeToken(token);
    }

    @Override
    public String getUserId(String token) {
        if (token == null) throw new UnknownTokenException("Token not present!");
        return tokenService.getUserId(token);
    }



}
