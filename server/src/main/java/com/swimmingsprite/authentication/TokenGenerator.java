package com.swimmingsprite.authentication;

import javax.persistence.TemporalType;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.UUID;

public class TokenGenerator {
    protected Token generate(String userId) {
        String token = UUID.randomUUID().toString();
        String refreshToken = UUID.randomUUID().toString();
        Instant expire = Instant.now().plus(12, ChronoUnit.HOURS);
        return new Token(token, refreshToken, userId, expire);
    }
}
