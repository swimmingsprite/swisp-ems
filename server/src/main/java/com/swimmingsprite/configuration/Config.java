package com.swimmingsprite.configuration;

import com.swimmingsprite.authentication.AuthenticationManager;
import com.swimmingsprite.authentication.BasicAuthenticator;
import com.swimmingsprite.authentication.login.LoginAuthenticator;
import com.swimmingsprite.authentication.login.BasicLoginAuthenticator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class Config {
   /* @Bean
    AuthenticationManager getAuthenticationManager() {
        return new BasicAuthenticator();
    }*/
}
