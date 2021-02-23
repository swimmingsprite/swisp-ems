package com.swimmingsprite.ems.filestorage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

public class FileStorage extends AbstractStorage<DetailedDirectoryItem> {
    public FileStorage(FileSharer fileSharer, String pathPrefix) {
        super(fileSharer, pathPrefix);
    }

    public FileStorage() {}

    private String getFullPath(String relativePath) {
        return getPathPrefix() + relativePath;
    }

    @Override
    public List<DetailedDirectoryItem> listDirectory(String directoryPath) {
        try {
            return Files.list(new File(getFullPath(directoryPath)).toPath())
                    .parallel()
                    .filter(path -> Files.isRegularFile(path, LinkOption.NOFOLLOW_LINKS)
                            || Files.isDirectory(path, LinkOption.NOFOLLOW_LINKS))
                    .map(path -> {
                                BasicFileAttributes att;
                                try {
                                    att = Files.readAttributes(path,
                                            BasicFileAttributes.class,
                                            LinkOption.NOFOLLOW_LINKS);
                                } catch (IOException e) {
                                    return null;
                                }
                                return att != null ? DetailedDirectoryItem.fromPath(path, att) : null;
                            })
                    .filter(Objects::nonNull)
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Collections.emptyList();
    }

    @Override
    public Optional<DetailedDirectoryItem> getItem(String filePath) {
        return Optional.empty();
    }

    @Override
    public Optional<FileSharer> supportSharing() {
        return Optional.empty();
    }

    @Override
    public DetailedDirectoryItem back(DetailedDirectoryItem directory) {
        return null;
    }

    @Override
    public void save(DetailedDirectoryItem directory, byte[] dataToSave) {

    }

    @Override
    public byte[] load(DetailedDirectoryItem file) {
        return new byte[0];
    }

    @Override
    public void delete(DetailedDirectoryItem item) {

    }

    @Override
    public void rename(DetailedDirectoryItem item, String newName) {

    }

    @Override
    public void move(DetailedDirectoryItem item, DetailedDirectoryItem toMoveDirectory) {

    }

    @Override
    public void makeDirectory(DetailedDirectoryItem directory, String newDirName) {

    }
}
