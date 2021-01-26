package com.swimmingsprite.ems.model.post;

import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.model.user.Publishable;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "comment")
public class Comment implements Publishable<String, User> {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @ManyToOne
    private Post post;

    @ManyToOne
    private User author;

    @Column(name = "publish_time", columnDefinition = "TIMESTAMP")
    private Instant publishTime;

    private String publishContent;

    public Comment() {}

    public String getId() {
        return id;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
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

    public void setAuthor(User author) {
        this.author = author;
    }
}
