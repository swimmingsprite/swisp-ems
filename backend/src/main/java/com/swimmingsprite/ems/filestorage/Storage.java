package com.swimmingsprite.ems.filestorage;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

/**
* @param <T> - type of data passed to save method and retrieved by load method
* @param <U> - type represents directory item
* */
public interface Storage<T, U extends DirectoryItem>
        extends FileOperation {
    List<U> listDirectory(String directoryPath);
    U getItem(String filePath);
    Optional<FileSharer> supportSharing();

}
