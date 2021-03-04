package com.swimmingsprite.ems.configuration;

import com.swimmingsprite.ems.filestorage.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeansConfiguration {
    @Bean
    Storage<DetailedDirectoryItem> getStorage(
            @Value("${storage.files.prefix}") String prefix) {
        return new SharableFileStorage<>(new DatabaseSharer(), prefix);
    }
}
