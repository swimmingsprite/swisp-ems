package com.swimmingsprite.authentication.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginAuthenticatorProvider {
    @Autowired
    private EmailLoginAuthenticator emailLoginAuthenticator;
    @Autowired
    private PhoneNumberLoginAuthenticator phoneNumberLoginAuthenticator;

    protected EmailLoginAuthenticator getEmailLoginAuthenticator() {
        return emailLoginAuthenticator;
    }

    protected PhoneNumberLoginAuthenticator getPhoneNumberLoginAuthenticator() {
        return phoneNumberLoginAuthenticator;
    }


}
