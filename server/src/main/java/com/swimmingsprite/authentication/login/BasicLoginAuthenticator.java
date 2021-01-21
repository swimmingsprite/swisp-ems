package com.swimmingsprite.authentication.login;

import com.swimmingsprite.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.authentication.repository.UserLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Optional;

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
            throw new RuntimeException("Server error.");
        }
        byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
        String hashPassword = Base64.getEncoder().encodeToString(hash);

        return repository.getUserIdByCredentials(login, hashPassword);
    }


}
