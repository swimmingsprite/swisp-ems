package com.swimmingsprite.ems.filestorage;

import java.nio.file.Path;

/**
* @param <T> type representation of data to save/load
*/

public interface FileOperation<T> {
    void save(Path path, T file);
    T load(Path path);
    void delete(Path path);
    void rename(Path path, String newName);
    void move(Path path, Path newPath);
}
