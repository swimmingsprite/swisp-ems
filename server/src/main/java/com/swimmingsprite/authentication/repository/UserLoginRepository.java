package com.swimmingsprite.authentication.repository;

import com.swimmingsprite.authentication.entity.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, String> {

}
