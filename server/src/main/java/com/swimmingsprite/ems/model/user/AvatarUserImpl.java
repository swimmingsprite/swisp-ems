package com.swimmingsprite.ems.model.user;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "avatar_users")
public class AvatarUserImpl implements AvatarUser {

    // TODO: 19. 1. 2021 AvatarUserImpl should extends User

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NonNull
    @OneToOne
    private UserImpl user;

    @Column(name = "role")
    private String employeeRole;

    @Column(name = "avatar_color")
    private String avatarColor;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "avatar_image", columnDefinition = "LONGTEXT")
    private String avatarImage;

    public AvatarUserImpl() {}

    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getAvatarColor() {
        return avatarColor;
    }

    @Override
    public void setAvatarColor(String avatarColor) {
        this.avatarColor = avatarColor;
    }

    @Override
    public String getAvatarImage() {
        return avatarImage;
    }

    @Override
    public void setAvatarImage(String avatarImage) {
        this.avatarImage = avatarImage;
    }

    @Override
    public User getUser() {
        return user;
    }

    @Override
    public void setUser(UserImpl avatarUser) {
        this.user = avatarUser;
    }

    @Override
    public String getRole() {
        return employeeRole;
    }

    @Override
    public void setRole(String role) {
        this.employeeRole = role;
    }

    @Override
    public String getName() {
        return user.getName();
    }

    @Override
    public void setName(String name) {
        user.setName(name);
    }
}
