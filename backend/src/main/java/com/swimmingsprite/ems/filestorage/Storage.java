package com.swimmingsprite.ems.filestorage;

import java.nio.file.Path;
import java.util.List;

/*
* T - type passed to save method and retrieved by load method
* U - type represents directory item
* */
public interface Storage<T, U extends DirectoryItem>
        extends FileOperation<T> {
    List<U> listDirectory(String directoryPath);
    U fileInfo(String filePath);
}
