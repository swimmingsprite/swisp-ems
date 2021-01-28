package com.swimmingsprite.ems.interceptor;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.exceptionhandler.SimpleMessage;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AdminAuthorizationInterceptor implements HandlerInterceptor {
    @Autowired
    private CurrentUser currentUser;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User user = currentUser.getUser();
        if (user.getUserPermission().equals("ADMIN"))
            return true;
        else {
            SimpleMessage.setSimpleMessageResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Access denied!");
            return false;
        }
    }
}
