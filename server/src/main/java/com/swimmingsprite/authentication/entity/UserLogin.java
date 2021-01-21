package com.swimmingsprite.authentication.entity;

import com.swimmingsprite.ems.model.user.UserImpl;

import javax.persistence.*;

@Entity
@Table(name = "user_login")
public class UserLogin {
    @Id
    @OneToOne
    private UserImpl user;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    public UserLogin(UserImpl user, String password) {
        this.user = user;
        this.password = password;
    }

    public UserLogin() {}

    public String getLogin() {
        return login;
    }

    public UserImpl getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }
}
