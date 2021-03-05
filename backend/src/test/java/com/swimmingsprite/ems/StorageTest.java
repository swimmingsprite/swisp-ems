package com.swimmingsprite.ems;

import com.swimmingsprite.ems.filestorage.DetailedDirectoryItem;
import com.swimmingsprite.ems.filestorage.DirectoryItem;
import com.swimmingsprite.ems.filestorage.Storage;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.*;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.StandardCharsets;
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
    @Order(1)
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
    @Order(2)
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


    @Test
    @Order(3)
    void testGetItem_NotExist() throws IOException {
        Optional<DetailedDirectoryItem> dirOpt = storage.getItem("nonexistentfile.txt");
        assertFalse(dirOpt::isPresent, "Storage returned non empty Optional");
    }

    @Test
    @Order(4)
    void testGetItem_FromDirectoryWithDepth() throws IOException {
        Files.deleteIfExists(getFullPath("testDirectory/testDirectory2/test.txt"));
        Files.deleteIfExists(getFullPath("testDirectory/testDirectory2"));
        Files.deleteIfExists(getFullPath("testDirectory"));
        Path tempDir = Files.createDirectory(getFullPath("testDirectory"));
        Path tempDir2 = Files.createDirectory(getFullPath("testDirectory/testDirectory2"));


        Optional<DetailedDirectoryItem> dirOpt = storage.getItem("testDirectory/testDirectory2");
        assertDoesNotThrow(dirOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem dirDirI = dirOpt.get();
        assertEquals(dirDirI.getName(), "testDirectory2");
        assertEquals(dirDirI.getType(), DirectoryItem.Type.DIRECTORY);

        Path tempFile = Files.createFile(getFullPath("testDirectory/testDirectory2/test.txt"));

        Optional<DetailedDirectoryItem> fileOpt = storage.getItem("testDirectory/testDirectory2/test.txt");
        assertDoesNotThrow(fileOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem fileDirI = fileOpt.get();
        assertEquals(fileDirI.getName(), "test.txt");
        assertEquals(fileDirI.getType(), DirectoryItem.Type.FILE);


        Files.delete(tempFile);
        Files.delete(tempDir2);
        Files.delete(tempDir);
    }

    @Test
    void test_saveString() throws IOException {
        Files.deleteIfExists(Path.of(prefix+"savetext.txt"));

        String s = "hello";
        storage.save("savetext.txt", s.getBytes(StandardCharsets.UTF_8));

        Optional<String> readed = Files.lines(Path.of(prefix+"savetext.txt"))
                .findFirst();

        assertTrue(readed.isPresent(), "Saved file String is not present.");
        assertEquals(readed.get(), "hello", "Saved String is not correct.");

        Files.deleteIfExists(Path.of(prefix+"savetext.txt"));
    }










}
