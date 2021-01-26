package com.swimmingsprite.ems.interceptor;

import com.swimmingsprite.ems.authentication.AuthenticationManager;
import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.file.AccessDeniedException;

@Component
public class AdminManagerAuthorizationInterceptor implements HandlerInterceptor {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("Bearer");
        String userId = authenticationManager.getUserId(token);
        User user = userRepository.getOne(userId);
        if (user.getUserPermission().equals("ADMIN")
                || user.getUserPermission().equals("MANAGER"))
            return true;
        else throw new AccessDeniedException("Access denied!");
    }
}
