package com.swimmingsprite.ems.model.post;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import com.swimmingsprite.ems.model.user.Publishable;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "post")
public class Post implements Publishable<String> {
    @Id
    @GeneratedValue
    private String id;

    @NonNull
    @ManyToOne
    private AvatarUserImpl author;
    @NonNull
    private Instant publishTime;
    @NonNull
    private String publishContent;

    @OneToMany
    private List<AvatarUserImpl> likes;
    @OneToMany
    private List<Comment> comments;

    public Post() {}

    public String getId() {
        return id;
    }

    @NonNull
    @Override
    public AvatarUserImpl getAuthor() {
        return author;
    }

    public void setAuthor(@NonNull AvatarUserImpl author) {
        this.author = author;
    }

    @NonNull
    @Override
    public Instant getPublishTime() {
        return publishTime;
    }

    @Override
    public String getPublishContent() {
        return publishContent;
    }

    public void setPublishTime(@NonNull Instant publishTime) {
        this.publishTime = publishTime;
    }

    public void setPublishContent(@NonNull String content) {
        this.publishContent = content;
    }

    public List<AvatarUserImpl> getLikes() {
        return likes;
    }

    public void setLikes(List<AvatarUserImpl> likes) {
        this.likes = likes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
