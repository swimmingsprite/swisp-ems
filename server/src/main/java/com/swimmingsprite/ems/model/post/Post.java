package com.swimmingsprite.ems.model.post;

import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.model.user.Publishable;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "post")
public class Post implements Publishable<String, User> {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NonNull
    @ManyToOne
    private User author;

    @NonNull
    @Column(name = "publish_time", columnDefinition = "TIMESTAMP")
    private Instant publishTime;

    @NonNull
    private String publishContent;

    @OneToMany(cascade = CascadeType.ALL)
    private Set<User> likes;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Comment> comments;

    public Post() {}

    public Post(@NonNull User author, @NonNull Instant publishTime, @NonNull String publishContent, Set<User> likes, List<Comment> comments) {
        this.author = author;
        this.publishTime = publishTime;
        this.publishContent = publishContent;
        this.likes = likes;
        this.comments = comments;
    }

    public String getId() {
        return id;
    }

    @NonNull
    @Override
    public User getAuthor() {
        return author;
    }

    public void setAuthor(@NonNull User author) {
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

    public Set<User> getLikes() {
        return likes;
    }

    public void setLikes(Set<User> likes) {
        this.likes = likes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
