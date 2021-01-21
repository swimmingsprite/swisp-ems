package com.swimmingsprite.authentication.login;

public interface LoginAuthenticator {
    boolean isLoginValid(String login, String password);
}
