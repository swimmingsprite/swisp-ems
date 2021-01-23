package com.swimmingsprite.ems.controller.authorization;

import com.swimmingsprite.authentication.AuthenticationManager;
import com.swimmingsprite.authentication.Token;
import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.exception.UnknownTokenException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorizationController {
    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/login")
    Token login(String login, String password) throws InvalidCredentialsException {
        return authenticationManager.login(login, password);
    }

    @PostMapping("/refresh")
    Token refresh(String refreshToken) throws UnknownTokenException {
        return authenticationManager.refresh(refreshToken);
    }

    @PostMapping("/logout")
    void logout(String token) throws UnknownTokenException {
        authenticationManager.logout(token);
    }
}
