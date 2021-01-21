package com.swimmingsprite.authentication.login;

import org.springframework.stereotype.Component;

@Component
public class EmailLoginAuthenticator {

    protected boolean isLoginValid(String login, String password) {
        return false;
    }
}
