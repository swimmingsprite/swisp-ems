package com.swimmingsprite.ems.configuration;

import com.swimmingsprite.ems.interceptor.AdminAuthorizationInterceptor;
import com.swimmingsprite.ems.interceptor.AdminManagerAuthorizationInterceptor;
import com.swimmingsprite.ems.interceptor.AuthenticationInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfiguration implements WebMvcConfigurer {
    final AuthenticationInterceptor authenticationInterceptor;
    final AdminManagerAuthorizationInterceptor adminManagerAuthorizationInterceptor;
    final AdminAuthorizationInterceptor adminAuthorizationInterceptor;

    public SecurityConfiguration(AuthenticationInterceptor authenticationInterceptor,
                                 AdminManagerAuthorizationInterceptor adminManagerAuthorizationInterceptor,
                                 AdminAuthorizationInterceptor adminAuthorizationInterceptor) {
        this.authenticationInterceptor = authenticationInterceptor;
        this.adminManagerAuthorizationInterceptor = adminManagerAuthorizationInterceptor;
        this.adminAuthorizationInterceptor = adminAuthorizationInterceptor;
    }

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
