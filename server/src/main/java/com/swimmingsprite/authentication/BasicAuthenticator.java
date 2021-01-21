package com.swimmingsprite.authentication;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.login.LoginAuthenticator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BasicAuthenticator implements AuthenticationManager {
    @Autowired
    LoginAuthenticator loginAuthenticator;
    @Autowired
    TokenService tokenService;

    @Override
    public Token login(String login, String password) {
        if (login == null || password == null)
            throw new InvalidCredentialsException("Login and password can't be empty!");
        String userId = Optional
                .ofNullable(loginAuthenticator.validate(login, password))
                .orElseThrow(() -> new InvalidCredentialsException("Wrong login or password!"));

        for (int x = 0; x < 5; x++) {
            Token newToken = new TokenGenerator().generate(userId);
            if (tokenService.isUnique(newToken)) {
                tokenService.addToken(newToken);
                return newToken;
            }
        }

        throw new RuntimeException("Server error.");
    }

    @Override
    public Token refresh(String refreshToken) {
        return null;
    }

    @Override
    public void logout(String token) {

    }

    @Override
    public String getUserId(String token) {
        return null;
    }

}
