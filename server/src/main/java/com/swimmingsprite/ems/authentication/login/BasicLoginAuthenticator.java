package com.swimmingsprite.ems.authentication.login;

import com.swimmingsprite.ems.authentication.repository.UserLoginRepository;
import com.swimmingsprite.ems.util.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class BasicLoginAuthenticator implements LoginAuthenticator {
    @Autowired
    UserLoginRepository repository;

    @Override
    public String validate(String login, String password) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Server error. No SHA-256 algorithm.");
        }
        byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));

        return repository.getUserIdByCredentials(login, PasswordUtils.encrypt(password));
    }




}
