package com.swimmingsprite.authentication.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginTypeAutoDecisionAuthenticator implements LoginAuthenticator {
    @Override
    public boolean isLoginValid(String login, String password) {
        if (LoginUtils.isEmail(login)) return LoginAuthenticatorProvider
                .getEmailLoginAuthenticator()
                .isLoginValid(login, password);
        return false;
    }


}
