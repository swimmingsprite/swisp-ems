package com.swimmingsprite.ems.model.login;

import com.swimmingsprite.ems.model.user.UserImpl;
import org.springframework.context.annotation.Primary;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "user_login")
public class UserLogin {
    @Id
    @OneToOne
    private UserImpl user;

    @Column(name = "password")
    private String password;

    public UserLogin(UserImpl user, String password) {
        this.user = user;
        this.password = password;
    }

    public UserLogin() {}

    public UserImpl getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }
}
