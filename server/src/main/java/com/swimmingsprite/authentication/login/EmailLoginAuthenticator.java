package com.swimmingsprite.authentication.login;

import com.swimmingsprite.authentication.entity.UserLogin;
import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.repository.UserLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmailLoginAuthenticator {
    @Autowired
    UserLoginRepository repository;

    protected String validate(String login, String password) {
        UserLogin userLogin = repository.

        throw new InvalidCredentialsException("Wrong login or password!");
    }
}
