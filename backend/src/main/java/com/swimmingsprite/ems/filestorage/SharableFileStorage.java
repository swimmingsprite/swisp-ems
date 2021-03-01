package com.swimmingsprite.ems.filestorage;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

public class SharableFileStorage extends AbstractStorage<DetailedDirectoryItem> {
    public SharableFileStorage(FileSharer fileSharer, String pathPrefix) {
        super(Objects.requireNonNull(fileSharer), pathPrefix);
    }

    public SharableFileStorage() {}

    private String getFullPath(String relativePath) {
        return getPathPrefix() + relativePath;
    }

    private DetailedDirectoryItem createItem(Path path, BasicFileAttributes att) {
    return new DetailedDirectoryItem.Builder()
            .created(att.creationTime().toInstant())
            .lastModified(att.lastModifiedTime().toInstant())
            .sharedWith(getFileSharer().sharedList(p)) // TODO: 23. 2. 2021 fetch shared
            .withPath(path.toString())
            .withName(path.getFileName().toString())
            .withSize(att.size())
            .ofType(att.isDirectory()
                        ? DirectoryItem.Type.DIRECTORY
                        : DirectoryItem.Type.FILE)
            .build();
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
                                return att != null ? createItem(path, att) : null;
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
