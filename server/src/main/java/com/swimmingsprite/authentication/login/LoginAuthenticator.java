package com.swimmingsprite.authentication.login;

public interface LoginAuthenticator {
    String validate(String login, String password);
}
