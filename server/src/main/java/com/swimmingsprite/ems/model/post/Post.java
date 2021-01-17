package com.swimmingsprite.ems.model.post;

import com.swimmingsprite.ems.model.user.AvatarUser;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import com.swimmingsprite.ems.model.user.Publishable;
import com.swimmingsprite.ems.model.user.User;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "post")
public class Post implements Publishable<String, AvatarUserImpl> {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NonNull
    @ManyToOne
    private AvatarUserImpl author;

    @NonNull
    @Column(name = "publish_time", columnDefinition = "TIMESTAMP")
    private Instant publishTime;

    @NonNull
    private String publishContent;

    @OneToMany
    private Set<AvatarUserImpl> likes;
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

    public Set<AvatarUserImpl> getLikes() {
        return likes;
    }

    public void setLikes(Set<AvatarUserImpl> likes) {
        this.likes = likes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
