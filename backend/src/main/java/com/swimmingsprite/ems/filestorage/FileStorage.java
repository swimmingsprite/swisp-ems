package com.swimmingsprite.ems.filestorage;

import java.util.List;
import java.util.Optional;

public class FileStorage<U extends DirectoryItem> extends AbstractStorage<U> {
    public FileStorage(FileSharer fileSharer, String pathPrefix) {
        super(fileSharer, pathPrefix);
    }
    public FileStorage() {}

    @Override
    public List<U> listDirectory(String directoryPath) {
        return null;
    }

    @Override
    public Optional<U> getItem(String filePath) {
        return Optional.empty();
    }

    @Override
    public Optional<FileSharer> supportSharing() {
        return Optional.empty();
    }

    @Override
    public U back(U directory) {
        return null;
    }

    @Override
    public void save(U directory, byte[] dataToSave) {

    }

    @Override
    public byte[] load(U file) {
        return new byte[0];
    }

    @Override
    public void delete(U item) {

    }

    @Override
    public void rename(U item, String newName) {

    }

    @Override
    public void move(U item, U toMoveDirectory) {

    }

    @Override
    public void makeDirectory(U directory, String newDirName) {

    }
}
