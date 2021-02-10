package com.swimmingsprite.ems.service;

import com.swimmingsprite.ems.authentication.entity.UserLogin;
import com.swimmingsprite.ems.authentication.exception.UserAlreadyExistsException;
import com.swimmingsprite.ems.authentication.repository.UserLoginRepository;
import com.swimmingsprite.ems.entity.user.User;
import com.swimmingsprite.ems.repository.UserRepository;
import com.swimmingsprite.ems.util.PasswordUtils;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    final EntityManager entityManager;
    final UserRepository userRepository;
    final UserLoginRepository userLoginRepository;

    public UserService(EntityManager entityManager,
                       UserRepository userRepository,
                       UserLoginRepository userLoginRepository) {
        this.entityManager = entityManager;
        this.userRepository = userRepository;
        this.userLoginRepository = userLoginRepository;
    }


    @Transactional
    public String registerUser(User user) {
        if (userLoginRepository.existsByLogin(user.getAddress().getEmail()))
            throw new UserAlreadyExistsException("User with this email address already exists.");
        if (userLoginRepository.existsByLogin(user.getAddress().getPhone()))
            throw new UserAlreadyExistsException("User with this phone number already exists.");

        userRepository.save(user);
        String generatedPassword = UUID.randomUUID().toString().substring(0, 10);
        userLoginRepository.saveAll(getUserLogins(user, generatedPassword));
        return user.getName()+": "+generatedPassword;
    }

    private List<UserLogin> getUserLogins(User user, String password) {
        UserLogin userLoginByPhone = new UserLogin(user, user.getAddress().getPhone(), PasswordUtils.encrypt(password));
        UserLogin userLoginByEmail = new UserLogin(user, user.getAddress().getEmail(), PasswordUtils.encrypt(password));
        return List.of(userLoginByPhone, userLoginByEmail);
    }


}
