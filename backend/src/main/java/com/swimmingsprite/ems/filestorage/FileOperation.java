package com.swimmingsprite.ems.filestorage;


/*
* @param <T> type representation of data to save/load
*/

public interface FileOperation{
    void save(String path, byte[] dataToSave);
    byte[] load(String path);
    void delete(String path);
    void rename(String path, String newName);
    void move(String path, String newPath);
}
