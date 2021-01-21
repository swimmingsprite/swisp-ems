package com.swimmingsprite.authentication.login;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.repository.UserLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BasicLoginAuthenticator implements LoginAuthenticator {
    @Autowired
    UserLoginRepository repository;

    @Override
    public String validate(String login, String password) {
        return repository.getUserIdByCredentials(login, password);
    }


}
