package com.swimmingsprite.ems.model.user;

import com.swimmingsprite.ems.model.Address;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class User {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NonNull
    @Column(name = "name")
    private String name;

    @NotNull
    @OneToOne
    private Address address;

    @NotNull
    @Column(name = "user_permission")
    private String userPermission;

    @Column(name = "role")
    private String employeeRole;

    @Column(name = "avatar_color")
    private String avatarColor;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "avatar_image", columnDefinition = "LONGTEXT")
    private String avatarImage;

    public String getId() {
        return id;
    }

    @NonNull
    public String getName() {
        return name;
    }

    public void setName(@NonNull String name) {
        this.name = name;
    }

    public String getEmployeeRole() {
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

    public void setId(String id) {
        this.id = id;
    }

    public String getUserPermission() {
        return userPermission;
    }

    public void setUserPermission(String userPermission) {
        this.userPermission = userPermission;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
