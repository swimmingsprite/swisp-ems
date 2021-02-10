package com.swimmingsprite.ems.controller.authentication;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.Token;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.entity.user.CurrentUser;
import com.swimmingsprite.ems.entity.user.User;
import com.swimmingsprite.ems.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.validation.Valid;


@RestController
public class AuthenticationController {
    final AuthenticationManager authenticationManager;
    final EntityManager entityManager;
    final UserService userService;
    final CurrentUser currentUser;

    public AuthenticationController(AuthenticationManager authenticationManager,
                                    EntityManager entityManager,
                                    UserService userService,
                                    CurrentUser currentUser) {
        this.authenticationManager = authenticationManager;
        this.entityManager = entityManager;
        this.userService = userService;
        this.currentUser = currentUser;
    }

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

