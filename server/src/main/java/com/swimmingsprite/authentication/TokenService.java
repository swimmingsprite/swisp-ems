package com.swimmingsprite.authentication;

import com.swimmingsprite.authentication.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class TokenService {
    @Autowired
    TokenRepository tokenRepository;

    Map<String, Token> tokens;

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
