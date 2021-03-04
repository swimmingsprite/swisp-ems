package com.swimmingsprite.ems;

import com.swimmingsprite.ems.filestorage.DetailedDirectoryItem;
import com.swimmingsprite.ems.filestorage.DirectoryItem;
import com.swimmingsprite.ems.filestorage.Storage;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
public class StorageTest {
    @Autowired
    Storage<DetailedDirectoryItem> storage;

    @Test
    void testGetItemFromDirectory() {
        Optional<DetailedDirectoryItem> fileOpt = storage.getItem("test.txt");
        assertDoesNotThrow(fileOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem fileDirI = fileOpt.get();
        assertEquals(fileDirI.getName(), "test.txt");
        assertEquals(fileDirI.getType(), DirectoryItem.Type.FILE);

        Optional<DetailedDirectoryItem> dirOpt = storage.getItem("testDirectory");
        assertDoesNotThrow(fileOpt::get, "Storage returned empty Optional");
        DetailedDirectoryItem dirDirI = fileOpt.get();
        assertEquals(fileDirI.getName(), "testDirectory");
        assertEquals(fileDirI.getType(), DirectoryItem.Type.DIRECTORY);
    }
}
