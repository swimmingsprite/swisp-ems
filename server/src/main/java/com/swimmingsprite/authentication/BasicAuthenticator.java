package com.swimmingsprite.authentication;

import com.swimmingsprite.authentication.login.EmailLoginAuthenticator;
import com.swimmingsprite.authentication.login.LoginAuthenticator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BasicAuthenticator implements AuthenticationManager {
    @Autowired
    LoginAuthenticator loginAuthenticator;

    @Override
    public Token login(String login, String password) {
        return null;
    }

    @Override
    public Token refresh(String refreshToken) {
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
