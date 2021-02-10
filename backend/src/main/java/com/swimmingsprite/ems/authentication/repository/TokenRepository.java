package com.swimmingsprite.ems.authentication.repository;

import com.swimmingsprite.ems.authentication.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<Token, String> {
   /* @Query("select Token " +
            "from Token t " +
            "where t.token = ?1 " +
            "or t.refreshToken = ?2")
    Token getAllNonUniqueTokens(String token, String refreshToken);*/
}
