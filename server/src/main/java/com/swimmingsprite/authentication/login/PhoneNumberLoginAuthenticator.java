package com.swimmingsprite.authentication.login;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import org.springframework.stereotype.Component;

@Component
public class PhoneNumberLoginAuthenticator {
    protected String validate(String login, String password) {
        //pass to hash
        throw new InvalidCredentialsException("Wrong login or password!");
    }
}
