package com.swimmingsprite.authentication.login;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;

public interface LoginAuthenticator {
    String validate(String login, String password);
}
