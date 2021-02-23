package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.nio.file.Path;
import java.time.Instant;
import java.util.List;
import java.util.Objects;

/*
*
* */
public class DirectoryItem {
    public enum Type {
        DIRECTORY, FILE
    }

    private final Type type;
    private final String name;
    private final String path;

    protected DirectoryItem(Builder<?> builder) {
        this.type = builder.type;
        this.name = builder.name;
        this.path = builder.path;
        }

    public Type getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    public String getPath() {
        return path;
    }

    public abstract static class Builder<T extends Builder<T>> {
        private Type type;
        private String name;
        private String path;

        public abstract T self();
        abstract DirectoryItem build();

        public T ofType(Type type) {
            this.type = Objects.requireNonNull(type);
            return self();
        }

        public T withPath(String path) {
            this.path = Objects.requireNonNull(path);
            return self();
        }

        public T withName(String name) {
            this.name = Objects.requireNonNull(name);
            return self();
        }

    }

    public static class ItemBuilder extends Builder<ItemBuilder>  {
        private Type type;
        private String name;
        private String path;

        public ItemBuilder self() {
            return this;
        }

        public DirectoryItem build() {
            return new DirectoryItem(this);
        }
    }
}
