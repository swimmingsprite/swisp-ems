package com.swimmingsprite.ems.filestorage;

import com.swimmingsprite.ems.entity.user.User;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;

/*
*
* */
public class DetailedDirectoryItem extends DirectoryItem {

    private final Instant lastModified;
    private final Instant created;
    private final long size;
    private final List<User> sharedWith;

    private DetailedDirectoryItem(Builder builder) {
        super(builder);
        this.lastModified = builder.lastModified;
        this.created = builder.created;
        this.size = builder.size;
        this.sharedWith = builder.sharedWith;
    }

    public static class Builder extends DirectoryItem.Builder<Builder> {
        private Instant lastModified;
        private Instant created;
        private long size;
        private List<User> sharedWith;

        public Builder self() {
            return this;
        }

        public DetailedDirectoryItem build() {
            return new DetailedDirectoryItem(this);
        }

        public Builder lastModified(Instant lastModified) {
            this.lastModified = Objects.requireNonNull(lastModified);
            return self();
        }

        public Builder created(Instant created) {
            this.created = Objects.requireNonNull(created);
            return self();
        }

        public Builder withSize(long size) {
            this.size = Objects.requireNonNull(size);
            return self();
        }

        public Builder sharedWith(List<User> sharedWith) {
            this.sharedWith = Objects.requireNonNull(sharedWith);
            return self();
        }
    }

    public Instant getLastModified() {
        return lastModified;
    }

    public Instant getCreated() {
        return created;
    }

    public long getSize() {
        return size;
    }

    public List<User> getSharedWith() {
        return List.copyOf(sharedWith);
    }
}
