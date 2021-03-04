package com.swimmingsprite.ems;

import com.swimmingsprite.ems.filestorage.DetailedDirectoryItem;
import com.swimmingsprite.ems.filestorage.DirectoryItem;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.Assert;

import java.time.Instant;
import java.util.Collections;

@SpringBootApplication
public class EmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmsApplication.class, args);
    }
}