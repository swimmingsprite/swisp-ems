package com.swimmingsprite.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.util.Assert;

import java.time.*;
import java.util.stream.Stream;

/*@SpringBootApplication(scanBasePackages={
        "com.swimmingsprite.ems",
        "com.swimmingsprite.ems.authentication",
        "com.swimmingsprite.ems.configuration",
        "com.swimmingsprite.ems.exceptionhandler",
        "com.swimmingsprite.ems.interceptor"
})*/
//@EnableJpaRepositories("com.swimmingsprite.ems.authentication.repository")
@SpringBootApplication
public class EmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmsApplication.class, args);
    }




}