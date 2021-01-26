package com.swimmingsprite.ems.controller.authentication;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.Token;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

    @Autowired
    UserService userService;

    @Autowired
    CurrentUser currentUser;


    @PostMapping("/register")
    void register(@RequestHeader("login") String login) {
        // TODO: 26. 1. 2021 DTO FROM BODY, containing user info
        System.out.println("INSIDE LOGIN CONTROLLER");
       userService.registerUser(login);
    }

    @GetMapping
    String sayHi() {
        return "Hi, how are u "+currentUser.getUser().getName()+" ?";
    }


    @PostMapping("/login")
    Token login(@RequestHeader("login") String login,
                @RequestHeader("password") String password) throws InvalidCredentialsException {
        System.out.println("INSIDE LOGIN CONTROLLER");
        return authenticationManager.login(login, password);
    }

    @PostMapping("/refresh")
    Token refresh(@RequestHeader("Bearer") String refreshToken) throws UnknownTokenException {
        return authenticationManager.refresh(refreshToken);
    }

    @PostMapping("/logout")
    void logout(@RequestHeader("Bearer") String token) throws UnknownTokenException {
        authenticationManager.logout(token);
    }
}

//c7abd6e6-7c33-4c2f-b338-3d8f06b2e3fc