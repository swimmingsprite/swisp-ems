package com.swimmingsprite.authentication;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "token")
public class Token {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NonNull
    @Column(name = "token")
    private String token;

    @NonNull
    @Column(name = "refreshToken")
    private String refreshToken;

    @NonNull
    @Column(name = "userId")
    private String userId;

    @Column(name = "expire")
    @NonNull
    private Instant expire;

    public Token(@NonNull String token, @NonNull String refreshToken, String userId, Instant expire) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.expire = expire;
    }

    public Token() {}

    public void setId(String id) {
        this.id = id;
    }

    @NonNull
    public String getToken() {
        return token;
    }

    public void setToken(@NonNull String token) {
        this.token = token;
    }

    @NonNull
    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(@NonNull String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Instant getExpire() {
        return expire;
    }

    public void setExpire(Instant expire) {
        this.expire = expire;
    }
}
