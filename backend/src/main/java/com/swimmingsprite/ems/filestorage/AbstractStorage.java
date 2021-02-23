package com.swimmingsprite.ems.filestorage;

public abstract class AbstractStorage<U extends DirectoryItem> implements Storage<U> {
    private FileSharer fileSharer;
    private String pathPrefix;

    public AbstractStorage(FileSharer fileSharer, String pathPrefix) {
        this.fileSharer = fileSharer;
        this.pathPrefix = pathPrefix;
    }
    public AbstractStorage() {}

    public FileSharer getFileSharer() {
        return fileSharer;
    }

    public String getPathPrefix() {
        return pathPrefix;
    }
}
