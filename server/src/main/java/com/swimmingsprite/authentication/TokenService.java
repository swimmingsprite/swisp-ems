package com.swimmingsprite.authentication;

import com.swimmingsprite.authentication.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TokenService {
    @Autowired
    private TokenRepository tokenRepository;

    private Map<String, Token> tokens = new ConcurrentHashMap<>();

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
}
