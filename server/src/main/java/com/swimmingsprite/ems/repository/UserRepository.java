package com.swimmingsprite.ems.repository;

import com.swimmingsprite.ems.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
