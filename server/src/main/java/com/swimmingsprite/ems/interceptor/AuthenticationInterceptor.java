package com.swimmingsprite.ems.interceptor;

import com.sun.xml.bind.v2.util.QNameMap;
import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
import com.swimmingsprite.ems.authentication.exception.UserNotFoundException;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerErrorException;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AuthenticationInterceptor implements HandlerInterceptor {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CurrentUser currentUser;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("INTERCEPTOR PATH: "+request.getServletPath());
        String token;
        if ((token = request.getHeader("Bearer")) == null) throw new UnknownTokenException("Token not present!");
        String userId;
        if ((userId = authenticationManager.getUserId(token)) == null) throw new ServerErrorException("Server error.");
        User user = userRepository
                .findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User does not exist."));
        currentUser.setUser(user);
        return true;
    }
}
