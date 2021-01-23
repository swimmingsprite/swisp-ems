package com.swimmingsprite.ems.authentication.entity;

import com.swimmingsprite.ems.model.user.UserImpl;
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
    private UserImpl user;

    @Column(name = "login")
    @NotNull
    private String login;

    @Column(name = "password")
    @NotNull
    private String password;

    public UserLogin(UserImpl user, String login, String password) {
        this.user = user;
        this.password = password;
        this.login = login;
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
