package com.swimmingsprite.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@SpringBootApplication(scanBasePackages={
        "com.swimmingsprite.ems",
        "com.swimmingsprite.authentication",
        "com.swimmingsprite.configuration",
        "com.swimmingsprite.exceptionhandler",
        "com.swimmingsprite.interceptor"
})
@EnableJpaRepositories("com.swimmingsprite.authentication.repository")
public class EmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmsApplication.class, args);
    }


}