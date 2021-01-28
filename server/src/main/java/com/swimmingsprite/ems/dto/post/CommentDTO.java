package com.swimmingsprite.ems.dto.post;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class CommentDTO {
    @NotNull
    private String postId;

    @Size(min = 2)
    @NotBlank
    private String content;

    public CommentDTO(String postId, String content) {
        this.postId = postId;
        this.content = content;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
