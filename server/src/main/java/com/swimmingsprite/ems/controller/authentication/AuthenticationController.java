package com.swimmingsprite.ems.controller.authentication;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.Token;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;


@RestController
public class AuthenticationController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    EntityManager entityManager;


    @PostMapping("/login")
    Token login(@RequestHeader("login") String login,
                @RequestHeader("password") String password) throws InvalidCredentialsException {
        System.out.println("INSIDE LOGIN CONTROLLER");
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
