package com.swimmingsprite.ems.model.user;

import org.springframework.lang.NonNull;

import java.time.Instant;

public interface Publishable<T> {
    @NonNull
    User getAuthor();
    @NonNull
    Instant getPublishTime();
    @NonNull
    T getPublishContent();
}
