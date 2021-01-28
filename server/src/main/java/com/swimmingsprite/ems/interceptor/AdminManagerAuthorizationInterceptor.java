package com.swimmingsprite.ems.interceptor;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.exceptionhandler.SimpleMessage;
import com.swimmingsprite.ems.model.user.CurrentUser;
import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.file.AccessDeniedException;

@Component
public class AdminManagerAuthorizationInterceptor implements HandlerInterceptor {
    private final CurrentUser currentUser;

    public AdminManagerAuthorizationInterceptor(CurrentUser currentUser) {
        this.currentUser = currentUser;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User user = currentUser.getUser();
        if (user.getUserPermission().equals("ADMIN")
                || user.getUserPermission().equals("MANAGER"))
            return true;
        else {
            SimpleMessage.setSimpleMessageResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Access denied!");
            return false;
        }
    }
}
