package com.swimmingsprite.ems.model.user;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "avatar_users")
public class AvatarUserImpl implements AvatarUser {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NonNull
    @Column(name = "name")
    private String name;

    @Column(name = "role")
    private String employeeRole;

    @Column(name = "avatar_color")
    private String avatarColor;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "avatar_image", columnDefinition = "LONGTEXT")
    private String avatarImage;

    public AvatarUserImpl(String name) {
        this.name = name;
    }

    public AvatarUserImpl() {}

    public String getRole() {
        return employeeRole;
    }

    public void setEmployeeRole(String employeeRole) {
        this.employeeRole = employeeRole;
    }

    public String getAvatarColor() {
        return avatarColor;
    }

    public void setAvatarColor(String avatarColor) {
        this.avatarColor = avatarColor;
    }

    public String getAvatarImage() {
        return avatarImage;
    }

    public void setAvatarImage(String avatarImage) {
        this.avatarImage = avatarImage;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
