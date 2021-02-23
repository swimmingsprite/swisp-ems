package com.swimmingsprite.ems.entity.user;

import org.springframework.lang.NonNull;

import java.time.Instant;

public abstract class PublishableEntity<T, U extends User> {
    @NonNull
    abstract public U getAuthor();
    @NonNull
    abstract public Instant getPublishTime();
    @NonNull
    abstract public T getPublishContent();
    abstract public void setPublishTime(@NonNull Instant publishTime);
    abstract public void setAuthor(@NonNull U author);
    abstract public void setPublishContent(@NonNull T publishContent);
}
