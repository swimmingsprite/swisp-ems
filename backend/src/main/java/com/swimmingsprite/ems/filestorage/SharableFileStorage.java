package com.swimmingsprite.ems.filestorage;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.nio.file.LinkOption.NOFOLLOW_LINKS;

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
                    .filter(path -> Files.isRegularFile(path, NOFOLLOW_LINKS)
                            || Files.isDirectory(path, NOFOLLOW_LINKS))
                    .map(path -> {
                                BasicFileAttributes att;
                                try {
                                    att = Files.readAttributes(path,
                                            BasicFileAttributes.class,
                                            NOFOLLOW_LINKS);
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
        Path fullPath = Path.of(getFullPath(filePath));

        if (Files.exists(Path.of(getFullPath(filePath)), LinkOption.NOFOLLOW_LINKS)) {
            try {
                BasicFileAttributes
                        att = Files.readAttributes(fullPath,
                        BasicFileAttributes.class,
                        LinkOption.NOFOLLOW_LINKS);
                return Optional.of(createItem(fullPath, att));
            }
            catch (IOException e) {
                e.printStackTrace();
                return Optional.empty();
            }
        }
        return Optional.empty();
    }

    @Override
    public Optional<FileSharer> supportSharing() {
        return Optional.of(getFileSharer());
    }

    @Override
    public DetailedDirectoryItem up(String directoryPath) {
        return null;
    }

    @Override
    public void save(String newFilePath, byte[] dataToSave) throws IOException {
        Path fullPath = Path.of(getFullPath(newFilePath));
        try (InputStream is = new ByteArrayInputStream(dataToSave)){
            Files.copy(is, fullPath);
        }
        catch (IOException e) {
            throw e;
        }
    }

    @Override
    public byte[] load(String filePath) throws IOException {
        Path fullPath = Path.of(getFullPath(filePath));
        try (BufferedInputStream is = new BufferedInputStream(
                new FileInputStream(getFullPath(filePath)))) {
            if (Files.isRegularFile(fullPath, NOFOLLOW_LINKS)) {
                return is.readAllBytes();
            }
            throw new IOException("File is not a regular file.");
        }
        catch (IOException e) {
            throw e;
        }
    }

    @Override
    public void delete(String itemPath) {

    }

    @Override
    public void rename(String itemPath, String newName) {

    }

    @Override
    public void move(String itemPath, String toMoveDirectoryPath) {

    }

    @Override
    public void makeDirectory(String directoryPath, String newDirName) {

    }
}
