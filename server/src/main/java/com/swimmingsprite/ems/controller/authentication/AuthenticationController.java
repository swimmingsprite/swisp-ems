package com.swimmingsprite.ems.controller.authentication;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.Token;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.validation.Valid;


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
    String register(@RequestBody @Valid User newUser) {
        newUser.setId(null);
       return userService.registerUser(newUser);
    }

    @GetMapping //test
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
