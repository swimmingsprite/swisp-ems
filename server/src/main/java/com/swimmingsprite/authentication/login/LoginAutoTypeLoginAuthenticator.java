package com.swimmingsprite.authentication.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginAutoTypeLoginAuthenticator implements LoginAuthenticator {
    @Autowired
    LoginAuthenticatorProvider loginAuthenticatorProvider;

    @Override
    public boolean isLoginValid(String login, String password) {
        if (LoginUtils.isEmail(login)) return loginAuthenticatorProvider
                .getEmailLoginAuthenticator()
                .isLoginValid(login, password);

        else if (LoginUtils.isPhoneNumber(login)) return loginAuthenticatorProvider
                .getPhoneNumberLoginAuthenticator()
                .isLoginValid(login, password);

        return false;
    }


}
