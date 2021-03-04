package com.swimmingsprite.ems.filestorage;

import java.util.List;
import java.util.Optional;

/**
*
* @param <U> - type represents directory item
* */
public interface Storage<U extends DirectoryItem>
        extends StorageOperation {
    List<U> listDirectory(String directoryPath);
    Optional<U> getItem(String filePath);
    Optional<FileSharer> supportSharing();
    U up(String directoryPath);
}
