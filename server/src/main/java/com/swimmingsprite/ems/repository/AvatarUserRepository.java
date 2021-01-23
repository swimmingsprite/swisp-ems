package com.swimmingsprite.ems.repository;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvatarUserRepository extends JpaRepository<AvatarUserImpl, String> {
}
