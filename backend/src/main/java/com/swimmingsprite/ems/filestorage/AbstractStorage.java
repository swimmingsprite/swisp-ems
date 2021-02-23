package com.swimmingsprite.ems.filestorage;

public abstract class AbstractStorage<U extends DirectoryItem> implements Storage<U> {
    private FileSharer fileSharer;

    public AbstractStorage(FileSharer fileSharer) {
        this.fileSharer = fileSharer;
    }
    public AbstractStorage() {}


}
