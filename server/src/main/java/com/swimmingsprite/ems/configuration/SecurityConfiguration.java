package com.swimmingsprite.ems.configuration;

import com.swimmingsprite.ems.interceptor.AdminAuthorizationInterceptor;
import com.swimmingsprite.ems.interceptor.AuthenticationInterceptor;
import com.swimmingsprite.ems.interceptor.AdminManagerAuthorizationInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfiguration implements WebMvcConfigurer {
    @Autowired
    AuthenticationInterceptor authenticationInterceptor;
    @Autowired
    AdminManagerAuthorizationInterceptor adminManagerAuthorizationInterceptor;
    @Autowired
    AdminAuthorizationInterceptor adminAuthorizationInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authenticationInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/error",
                        "/login/**",
                        "/logout/**",
                        "/refresh/**",
                        "/register/**");

        registry.addInterceptor(adminManagerAuthorizationInterceptor)
                .addPathPatterns("/employees/**", "/shifts/**")
                .excludePathPatterns("/shifts/myShifts/**");

        registry.addInterceptor(adminAuthorizationInterceptor)
                .addPathPatterns("/register/**");

    }
}
