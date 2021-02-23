package com.swimmingsprite.ems.filestorage;


/*
* @param <T> type representation of data to save/load
*/

public interface StorageOperation {
    void save(DirectoryItem directory, byte[] dataToSave);
    byte[] load(DirectoryItem file);
    void delete(DirectoryItem item);
    void rename(DirectoryItem item, String newName);
    void move(DirectoryItem item, DirectoryItem toMoveDirectory);
    void makeDirectory(DirectoryItem directory, String newDirName);
}
