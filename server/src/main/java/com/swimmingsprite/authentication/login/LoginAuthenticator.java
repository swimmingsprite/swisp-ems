package com.swimmingsprite.authentication.login;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import org.springframework.stereotype.Component;

@Component
public interface LoginAuthenticator {
    String validate(String login, String password);
}
