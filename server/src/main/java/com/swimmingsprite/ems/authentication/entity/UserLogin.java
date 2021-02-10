package com.swimmingsprite.ems.authentication.entity;

import com.swimmingsprite.ems.entity.user.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user_login")
public class UserLogin {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;


    @ManyToOne
    @NotNull
    private User user;

    @Column(name = "login")
    @NotNull
    private String login;

    @Column(name = "password")
    @NotNull
    private String password;

    public UserLogin(User user, String login, String password) {
        this.user = user;
        this.password = password;
        this.login = login;
    }

    public UserLogin() {}

    public String getLogin() {
        return login;
    }

    public User getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }
}
