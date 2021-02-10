package com.swimmingsprite.ems.authentication;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.Instant;

@Entity
@Table(name = "token")
public final class Token {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    @Column(name = "token")
    private String token;

    @NotNull
    @Column(name = "refreshToken")
    private String refreshToken;

    @NotNull
    @Column(name = "userId")
    private String userId;

    @Column(name = "expire")
    @NotNull
    private Instant expire;

    public Token(@NotNull String token,
                 @NotNull String refreshToken,
                 @NotNull String userId,
                 @NotNull Instant expire) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.userId = userId;
        this.expire = expire;
    }

    public Token() {}

    public String getTokenString() {
        return token;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public String getUserId() { return userId; }

    public Instant getExpire() {
        return expire;
    }

}
