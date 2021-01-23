package com.swimmingsprite.ems.interceptor;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.authentication.exception.UnknownTokenException;
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

    /*public AuthenticationInterceptor(@Autowired AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }*/

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("INTERCEPTOR PATH: "+request.getServletPath());
        System.out.println(request.getHeader("testing"));

        String token;
        if ((token = request.getHeader("Bearer")) == null) throw new UnknownTokenException("Token not present!");
        if (authenticationManager.getUserId(token) == null) throw new ServerErrorException("Server error.");
        return true;
    }
}
