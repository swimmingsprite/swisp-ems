package com.swimmingsprite.ems.filestorage;


/*
* @param <T> type representation of data to save/load
*/

public interface StorageOperation {
    void save(String newFilePath, byte[] dataToSave);
    byte[] load(String filePath);
    void delete(String itemPath);
    void rename(String itemPath, String newName);
    void move(String itemPath, String toMoveDirectoryPath);
    void makeDirectory(String directoryPath, String newDirName);
}
