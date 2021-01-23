package com.swimmingsprite.ems.authentication;

import com.swimmingsprite.ems.authentication.entity.UserLogin;
import com.swimmingsprite.ems.authentication.exception.InvalidCredentialsException;
import com.swimmingsprite.ems.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import com.swimmingsprite.ems.model.user.UserImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Component
public interface AuthenticationManager {
    Token login(String login, String password) throws InvalidCredentialsException;
    Token refresh(String refreshToken) throws UnknownTokenException;
    void logout(String token) throws UnknownTokenException;
    String getUserId(String token) throws UnknownTokenException, ExpiredTokenException;
    void test(); //
}
