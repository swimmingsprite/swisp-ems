package com.swimmingsprite.ems.authentication.login;

import org.springframework.stereotype.Component;

@Component
public interface LoginAuthenticator {
    String validate(String login, String password);
}
