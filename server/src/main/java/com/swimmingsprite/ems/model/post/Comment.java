package com.swimmingsprite.ems.model.post;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import com.swimmingsprite.ems.model.user.Publishable;
import com.swimmingsprite.ems.model.user.User;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "comment")
public class Comment implements Publishable<String> {
    @Id
    @GeneratedValue
    private String id;
    @ManyToOne
    private AvatarUserImpl author;
    private Instant publishTime;
    private String publishContent;

    public Comment() {}

    public String getId() {
        return id;
    }

    public void setAuthor(AvatarUserImpl author) {
        this.author = author;
    }

    public void setPublishTime(Instant publishTime) {
        this.publishTime = publishTime;
    }

    public void setPublishContent(String publishContent) {
        this.publishContent = publishContent;
    }

    @Override
    public User getAuthor() {
        return author;
    }

    @Override
    public Instant getPublishTime() {
        return publishTime;
    }

    @Override
    public String getPublishContent() {
        return publishContent;
    }
}
