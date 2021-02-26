package com.swimmingsprite.ems.authentication.login;

import com.swimmingsprite.ems.authentication.repository.UserLoginRepository;
import com.swimmingsprite.ems.util.PasswordUtils;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
class BasicLoginAuthenticator implements LoginAuthenticator {
    final UserLoginRepository repository;

    public BasicLoginAuthenticator(UserLoginRepository repository) {
        this.repository = repository;
    }

    @Override
    public String validate(String login, String password) {
        return repository.getUserIdByCredentials(login, PasswordUtils.encrypt(password));
    }
}
