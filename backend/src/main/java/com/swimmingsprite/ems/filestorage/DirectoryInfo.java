package com.swimmingsprite.ems.filestorage;

import java.nio.file.Path;
import java.util.List;

public interface DirectoryInfo<T> {
    List<T> listDirectory(Path directoryPath);
    T fileInfo(Path filePath);
}
