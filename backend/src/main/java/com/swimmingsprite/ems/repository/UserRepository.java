package com.swimmingsprite.ems.repository;

import com.swimmingsprite.ems.entity.user.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
}
