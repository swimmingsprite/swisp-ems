package com.swimmingsprite.ems.authentication.repository;

import com.swimmingsprite.ems.authentication.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, String> {
    @Query("select u.user.id " +
            "from UserLogin u " +
            "where u.login = ?1 " +
            "and u.password = ?2")
    String getUserIdByCredentials(String login, String passwordHash);

    boolean existsByLogin(String login);

}
