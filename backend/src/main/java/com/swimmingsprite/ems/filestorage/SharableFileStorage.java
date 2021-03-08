package com.swimmingsprite.ems.filestorage;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.file.attribute.PosixFileAttributes;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.nio.file.LinkOption.NOFOLLOW_LINKS;

public class SharableFileStorage<T extends DetailedDirectoryItem> extends AbstractStorage<DetailedDirectoryItem> {
    public SharableFileStorage(FileSharer fileSharer, String pathPrefix) {
        super(Objects.requireNonNull(fileSharer), pathPrefix);
    }

    public SharableFileStorage() {
    }

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
            } catch (IOException e) {
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
        InputStream is = new ByteArrayInputStream(dataToSave);
        Files.copy(is, fullPath);
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
    }

    @Override
    public void delete(String itemPath) throws IOException {
        Path fullPath = Path.of(getFullPath(itemPath));
        try (Stream<File> files = Files.walk(fullPath)
                .sorted(Comparator.reverseOrder())
                .map(Path::toFile)
        ) {
            files.forEach(file -> {
                if (!file.delete())
                    throw new RuntimeException("File " + file.getName() + " can't be deleted");
            });
        } catch (IOException e) {
            throw e;
        } catch (RuntimeException e) {
            throw new IOException(e.getMessage());
        }
    }

    @Override
    public void rename(String itemPath, String newName) throws IOException {
        File item = new File(getFullPath(itemPath));

        File newItem = new File(item.getParent() + "/"+newName);
        System.out.println("NEW item path: "+newItem.getAbsolutePath());

        if (item.isFile() || item.isDirectory()) {
            if (!item.renameTo(newItem)) throw new IOException("Can't rename item with path " + itemPath);
        } else throw new FileNotFoundException("File or directory with path " + item.getAbsolutePath() + " not found.");

    }

    @Override
    public void move(String itemPath, String toMoveDirectoryPath) {

    }

    @Override
    public void makeDirectory(String directoryPath, String newDirName) throws IOException {
        Path fullPath = Path.of(getFullPath(directoryPath));
        if (Files.isDirectory(fullPath)) {
            Files.createDirectory(
                    Path.of(getFullPath(directoryPath) + "/" + newDirName));
        }
        throw new IOException("Path " + directoryPath + " is not directory.");
    }
}
