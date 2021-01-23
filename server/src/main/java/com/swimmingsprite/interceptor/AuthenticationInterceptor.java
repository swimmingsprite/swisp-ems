package com.swimmingsprite.interceptor;

import com.swimmingsprite.authentication.AuthenticationManager;
import com.swimmingsprite.authentication.exception.UnknownTokenException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.server.ServerErrorException;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthenticationInterceptor implements HandlerInterceptor {
    @Autowired
    AuthenticationManager authenticationManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token;
        if ((token = request.getHeader("Bearer")) == null) throw new UnknownTokenException("Token not present!");
        if (authenticationManager.getUserId(token) == null) throw new ServerErrorException("Server error.");
        return true;
    }
}
