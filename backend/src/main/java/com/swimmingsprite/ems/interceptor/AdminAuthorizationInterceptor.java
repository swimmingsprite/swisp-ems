package com.swimmingsprite.ems.interceptor;

import com.swimmingsprite.ems.entity.user.CurrentUser;
import com.swimmingsprite.ems.entity.user.User;
import com.swimmingsprite.ems.exceptionhandler.SimpleMessage;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public final class AdminAuthorizationInterceptor implements HandlerInterceptor {
    private final CurrentUser currentUser;

    public AdminAuthorizationInterceptor(CurrentUser currentUser) {
        this.currentUser = currentUser;
    }

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
