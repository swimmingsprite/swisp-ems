package com.swimmingsprite.ems.interceptor;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.entity.user.CurrentUser;
import com.swimmingsprite.ems.entity.user.User;
import com.swimmingsprite.ems.exceptionhandler.SimpleMessage;
import com.swimmingsprite.ems.repository.UserRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@Component
public class AuthenticationInterceptor implements HandlerInterceptor {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final CurrentUser currentUser;

    public AuthenticationInterceptor(AuthenticationManager authenticationManager, UserRepository userRepository, CurrentUser currentUser) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.currentUser = currentUser;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        //check if token is present
        String token;
        if ((token = request.getHeader("Bearer")) == null) {
            SimpleMessage.setSimpleMessageResponse(response, HttpServletResponse.SC_BAD_REQUEST, "Token is not present!");
            return false;
        }

        //check if token is valid
        String userId;
        try {
            userId = authenticationManager.getUserId(token);
        } catch (UnknownTokenException e) {
            SimpleMessage.setSimpleMessageResponse(response, HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
            return false;
        } catch (ExpiredTokenException e) {
            SimpleMessage.setSimpleMessageResponse(response, HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
            return false;
        }

        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) currentUser.setUser(user.get());
        else {
            SimpleMessage.setSimpleMessageResponse(response, HttpServletResponse.SC_BAD_REQUEST, "User does not exist.");
            return false;
        }
        return true;
    }

}
