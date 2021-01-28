package com.swimmingsprite.ems.service;

import com.swimmingsprite.ems.authentication.entity.UserLogin;
import com.swimmingsprite.ems.authentication.exception.UserAlreadyExistsException;
import com.swimmingsprite.ems.authentication.repository.UserLoginRepository;
import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.repository.UserRepository;
import com.swimmingsprite.ems.util.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    EntityManager entityManager;

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserLoginRepository userLoginRepository;

  /*  @Transactional
    public void registerUser(String login) {
        // TODO: 26. 1. 2021 only for test
        User user = new User();
        user.setName("John Barney"+ UUID.randomUUID().toString().substring(0, 8));
        entityManager.persist(user);
        UserLogin userLogin = new UserLogin(user, login,"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
        entityManager.persist(userLogin);
        System.out.println("OK..........");
    }*/

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
