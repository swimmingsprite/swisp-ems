package com.swimmingsprite.authentication.login;

import org.springframework.stereotype.Component;

@Component
public class PhoneNumberLoginAuthenticator {
    protected boolean isLoginValid(String login, String password) {
        //pass to hash
        return false;
    }
}
