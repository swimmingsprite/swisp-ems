package com.swimmingsprite.ems.model.user;

import org.springframework.lang.NonNull;

import java.time.Instant;

public interface Publishable<T, U extends User> {
    @NonNull
    U getAuthor();
    @NonNull
    Instant getPublishTime();
    @NonNull
    T getPublishContent();

    void setPublishTime(@NonNull Instant publishTime);
    void setAuthor(@NonNull U author);
    void setPublishContent(@NonNull T publishContent);
}
