package com.swimmingsprite.ems.dto.post;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

public class PublishableDTO {
    @NotNull
    private String entityId;

    @Size(min = 2)
    @NotBlank
    private String content;

    private Instant publishTime;

    public PublishableDTO(String entityId, String content, Instant publishTime) {
        this.entityId = entityId;
        this.content = content;
        this.publishTime = publishTime;
    }

    public PublishableDTO() {}

    public String getEntityId() {
        return entityId;
    }

    public void setEntityId(String entityId) {
        this.entityId = entityId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Instant getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Instant publishTime) {
        this.publishTime = publishTime;
    }
}
