package com.swimmingsprite.authentication;

import org.springframework.stereotype.Component;

@Component
public class BasicAuthenticator implements AuthenticationManager {
    @Override
    public Token login(String login, String password) {
        return null;
    }

    @Override
    public void logout(Token token) {

    }

    @Override
    public String getUserId(Token token) {
        return null;
    }
}
