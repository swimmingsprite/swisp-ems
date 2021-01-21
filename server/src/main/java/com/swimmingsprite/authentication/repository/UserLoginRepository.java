package com.swimmingsprite.authentication.repository;

import com.swimmingsprite.authentication.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, String> {
    @Query("select u.user.id " +
            "from UserLogin u " +
            "where u.login = ?1 " +
            "and u.password = ?2")
    String getUserId(String login, String passwordHash);
}
