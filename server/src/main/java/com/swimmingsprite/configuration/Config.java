package com.swimmingsprite.configuration;

import com.swimmingsprite.authentication.login.LoginAuthenticator;
import com.swimmingsprite.authentication.login.BasicLoginAuthenticator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {
    @Bean
    LoginAuthenticator getLoginAuthenticator() {
        return new BasicLoginAuthenticator();
    }
}
