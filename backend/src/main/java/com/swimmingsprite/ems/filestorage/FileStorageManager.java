package com.swimmingsprite.ems.filestorage;

/*
* T - type passed to save method and retrieved by load method
* U - type represents file/directory metadata
* */
public interface FileStorageManager<T, U> extends FileOperation<T>, DirectoryInfo<U> {
}
