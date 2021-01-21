package com.swimmingsprite.authentication;

public interface AuthenticationManager {
    Token login(String login, String password);
    void logout(Token token);
    String getUserId(Token token);
}
