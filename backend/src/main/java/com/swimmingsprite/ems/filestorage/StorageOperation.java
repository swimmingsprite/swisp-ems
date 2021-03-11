package com.swimmingsprite.ems.filestorage;


/*
* @param <T> type representation of data to save/load
*/

import java.io.FileNotFoundException;
import java.io.IOException;

public interface StorageOperation {
    void save(String newFilePath, byte[] dataToSave) throws IOException;
    byte[] load(String filePath) throws IOException;
    void delete(String itemPath) throws IOException;
    void rename(String itemPath, String newName) throws IOException;
    void move(String itemPath, String toMoveDirectoryPath) throws IOException;
    void makeDirectory(String directoryPath, String newDirName) throws IOException;
}
