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
        new EmsApplication().aVoid();
        //SpringApplication.run(EmsApplication.class, args);
    }

    void aVoid() {
        DirectoryItem directoryItem = new DirectoryItem.ItemBuilder()
                .withName("abc")
                .withPath("def")
                .ofType(DirectoryItem.Type.FILE)
                .build();

        System.out.println(directoryItem.getName());
        System.out.println(directoryItem.getPath());
        System.out.println(directoryItem.getType());

        DetailedDirectoryItem detailedDi = new DetailedDirectoryItem.Builder()
                .created(Instant.now())
                .lastModified(Instant.now())
                .withSize(500)
                .sharedWith(Collections.emptyList())
                .build();

        System.out.println(detailedDi.getCreated());
        System.out.println(detailedDi.getLastModified());
        System.out.println(detailedDi.getSize());
        System.out.println(detailedDi.getSharedWith());


        System.out.println(detailedDi instanceof DirectoryItem);
    }

}