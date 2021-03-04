package com.swimmingsprite.ems.filestorage;


/*
* @param <T> type representation of data to save/load
*/

public interface StorageOperation {
    void save(String directory, byte[] dataToSave);
    byte[] load(String file);
    void delete(String item);
    void rename(String item, String newName);
    void move(String item, String toMoveDirectory);
    void makeDirectory(String directory, String newDirName);
}
