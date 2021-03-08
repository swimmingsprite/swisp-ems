package com.swimmingsprite.ems;

import com.swimmingsprite.ems.filestorage.DetailedDirectoryItem;
import com.swimmingsprite.ems.filestorage.DirectoryItem;
import com.swimmingsprite.ems.filestorage.Storage;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.*;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.Optional;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class StorageTest {
    @Autowired
    Storage<DetailedDirectoryItem> storage;
    @Value("${storage.files.prefix}")
    String prefix;

    private Path getFullPath(String path) {
        return Path.of(prefix + path);
    }


    @Test
    @Order(1)
    void testGetItem_FromFile() throws IOException {
        Files.deleteIfExists(getFullPath("test.txt"));
        Path temp = Files.createFile(getFullPath("test.txt"));

        Optional<DetailedDirectoryItem> fileOpt = storage.getItem("test.txt");
        assertDoesNotThrow(fileOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem fileDirI = fileOpt.get();
        assertEquals("test.txt", fileDirI.getName());
        assertEquals(DirectoryItem.Type.FILE, fileDirI.getType());

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
        assertEquals("testDirectory", dirDirI.getName());
        assertEquals(DirectoryItem.Type.DIRECTORY, dirDirI.getType());

        Files.delete(temp);
    }


    @Test
    @Order(3)
    void testGetItem_NotExist() {
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
        assertEquals("testDirectory2", dirDirI.getName());
        assertEquals(DirectoryItem.Type.DIRECTORY ,dirDirI.getType());

        Path tempFile = Files.createFile(getFullPath("testDirectory/testDirectory2/test.txt"));

        Optional<DetailedDirectoryItem> fileOpt = storage.getItem("testDirectory/testDirectory2/test.txt");
        assertDoesNotThrow(fileOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem fileDirI = fileOpt.get();
        assertEquals("test.txt", fileDirI.getName() );
        assertEquals(DirectoryItem.Type.FILE, fileDirI.getType());


        Files.delete(tempFile);
        Files.delete(tempDir2);
        Files.delete(tempDir);
    }

    @Test
    @Order(5)
    void test_saveString() throws IOException {
        Files.deleteIfExists(Path.of(prefix + "savetext.txt"));

        String s = "hello";
        storage.save("savetext.txt", s.getBytes(StandardCharsets.UTF_8));

        Optional<String> readed = Files.lines(Path.of(prefix + "savetext.txt"))
                .findFirst();

        assertTrue(readed.isPresent(), "Saved file String is not present.");
        assertEquals("hello", readed.get(), "Saved String is not correct.");

    }

    @Test
    @Order(6)
    void test_loadString() throws IOException {
        String loadedString = new String(storage.load("savetext.txt"), StandardCharsets.UTF_8);
        assertEquals("hello", loadedString, "Loaded String is not correct");
        //Files.deleteIfExists(Path.of(prefix + "savetext.txt"));
    }

    @Test
    @Order(7)
    void test_deleteFile() throws IOException {
        assertTrue(Files.exists(getFullPath("savetext.txt")));
        storage.delete("savetext.txt");
        assertFalse(Files.exists(getFullPath("savetext.txt")), "File wasn't deleted");
    }

    @Test
    @Order(8)
    void test_deleteDirectory() throws IOException {
        if (!Files.exists(getFullPath("testDir"))) Files.createDirectory(getFullPath("testDir"));

        assertTrue(Files.exists(getFullPath("testDir")));
        assertTrue(Files.isDirectory(getFullPath("testDir"), LinkOption.NOFOLLOW_LINKS));
        storage.delete("testDir");
        assertFalse(Files.exists(getFullPath("testDir")), "Directory wasn't deleted");

        Files.deleteIfExists(Path.of(prefix + "savetext.txt"));
    }

    @Test
    @Order(9)
    void test_deleteDirectoryIfContainsFiles() throws IOException {
        if (!Files.exists(getFullPath("testDir"))) Files.createDirectory(getFullPath("testDir"));

        assertTrue(Files.exists(getFullPath("testDir")));
        assertTrue(Files.isDirectory(getFullPath("testDir"), LinkOption.NOFOLLOW_LINKS));
        storage.delete("testDir");
        assertFalse(Files.exists(getFullPath("testDir")), "Directory wasn't deleted");

        //Files.deleteIfExists(Path.of(prefix + "savetext.txt"));
    }

    @Test
    @Order(10)
    void test_renameDirectory() throws IOException {
        if (!Files.exists(getFullPath("testDir"))) Files.createDirectory(getFullPath("testDir"));

        assertTrue(Files.exists(getFullPath("testDir")), "Testing directory does not exist.");
        storage.rename("testDir", "renamedDir");
        assertFalse(Files.exists(getFullPath("testDir")), "Directory wasn't renamed.");

        assertTrue(Files.exists(getFullPath("renamedDir")), "Renamed directory does not exist.");


        Files.deleteIfExists(Path.of(prefix + "savetext.txt"));
    }


}
