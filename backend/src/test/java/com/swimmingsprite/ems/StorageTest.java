package com.swimmingsprite.ems;

import com.swimmingsprite.ems.filestorage.DetailedDirectoryItem;
import com.swimmingsprite.ems.filestorage.DirectoryItem;
import com.swimmingsprite.ems.filestorage.Storage;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Optional;

@SpringBootTest
public class StorageTest {
    @Autowired
    Storage<DetailedDirectoryItem> storage;
    @Value("${storage.files.prefix}") String prefix;

    private Path getFullPath(String path) {
        return Path.of(prefix+path);
    }


    @Test
    void testGetItem_FromFile() throws IOException {
        Files.deleteIfExists(getFullPath("test.txt"));
        Path temp = Files.createFile(getFullPath("test.txt"));

        Optional<DetailedDirectoryItem> fileOpt = storage.getItem("test.txt");
        assertDoesNotThrow(fileOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem fileDirI = fileOpt.get();
        assertEquals(fileDirI.getName(), "test.txt");
        assertEquals(fileDirI.getType(), DirectoryItem.Type.FILE);

        Files.delete(temp);
    }

    @Test
    void testGetItem_FromDirectory() throws IOException {
        Files.deleteIfExists(getFullPath("testDirectory"));
        Path temp = Files.createDirectory(getFullPath("testDirectory"));

        Optional<DetailedDirectoryItem> dirOpt = storage.getItem("testDirectory");
        assertDoesNotThrow(dirOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem dirDirI = dirOpt.get();
        assertEquals(dirDirI.getName(), "testDirectory");
        assertEquals(dirDirI.getType(), DirectoryItem.Type.DIRECTORY);

        Files.delete(temp);
    }










}
