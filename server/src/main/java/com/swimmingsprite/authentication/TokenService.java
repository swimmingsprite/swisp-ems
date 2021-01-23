package com.swimmingsprite.authentication;

import com.swimmingsprite.authentication.exception.ExpiredTokenException;
import com.swimmingsprite.authentication.exception.UnknownTokenException;
import com.swimmingsprite.authentication.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TokenService {
    @Autowired
    private TokenRepository tokenRepository;

    private Map<String, Token> tokens = new ConcurrentHashMap<>();

    @EventListener(ApplicationReadyEvent.class)
    public void fetchAllTokensAfterStart() {
        List<Token> dbTokens = tokenRepository.findAll();
        dbTokens.forEach(token -> {
            tokens.put(token.getToken(), token);
            tokens.put(token.getRefreshToken(), token);
            tokens.put(token.getUserId(), token);
        });
    }

    protected void addToken(Token token) {
        Token newToken = tokenRepository.save(token);
        tokens.put(newToken.getToken(), newToken);
        tokens.put(newToken.getRefreshToken(), newToken);
        tokens.put(newToken.getUserId(), newToken);
    }

    protected boolean isUnique(Token token) {
        if (tokens.get(token.getToken()) == null
                && tokens.get(token.getRefreshToken()) == null
                && tokens.get(token.getUserId()) == null) return true;
        return false;
    }

    protected Token refreshToken(String refreshToken) {
        Token token = tokens.get(refreshToken);
        if (token == null || !token.getRefreshToken().equals(refreshToken))
            throw new UnknownTokenException("Unknown refresh token!");

        Token newToken = generateToken(token.getUserId());
        removeToken(token);
        return newToken;
    }

    protected void removeToken(String deleteToken) {
        Token token = tokens.get(deleteToken);
        if (token == null || !token.getToken().equals(deleteToken))
            throw new UnknownTokenException("Unknown token!");
        if (isExpired(token)) throw new ExpiredTokenException("Token expired!");

        tokenRepository.delete(token);
        tokens.remove(token.getUserId());
        tokens.remove(token.getRefreshToken());
        tokens.remove(token.getToken());
    }

    protected void removeToken(Token token) {
        if (isExpired(token)) throw new ExpiredTokenException("Token expired!");
        tokenRepository.delete(token);
        tokens.remove(token.getUserId());
        tokens.remove(token.getRefreshToken());
        tokens.remove(token.getToken());
    }

    protected String getUserId(String clientToken) {
        Token token = tokens.get(clientToken);
        if (token != null
                && token.getToken().equals(clientToken)) {
            if (isExpired(token)) throw new ExpiredTokenException("Token expired!");
            return token.getUserId();
        }
        throw new UnknownTokenException("Unknown token.");
    }

    protected Token generateToken(String userId) {
        for (int x = 0; x < 5; x++) {
            Token newToken = new TokenGenerator().generate(userId);
            if (isUnique(newToken)) {
                addToken(newToken);
                return newToken;
            }
        }
        throw new RuntimeException("Server error.");
    }

    protected boolean isExpired(Token token) {
        if (token.getExpire() == null) return true;
        return Instant.now().toEpochMilli() > token.getExpire().toEpochMilli();
    }
}
