package com.swimmingsprite.ems.filestorage;


/*
* @param <T> type representation of data to save/load
*/

public interface StorageOperation<U extends DirectoryItem> {
    void save(U directory, byte[] dataToSave);
    byte[] load(U file);
    void delete(U item);
    void rename(U item, String newName);
    void move(U item, U toMoveDirectory);
    void makeDirectory(U directory, String newDirName);
}
