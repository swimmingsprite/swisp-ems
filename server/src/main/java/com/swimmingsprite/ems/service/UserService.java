package com.swimmingsprite.ems.service;

import com.swimmingsprite.ems.authentication.entity.UserLogin;
import com.swimmingsprite.ems.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    EntityManager entityManager;

    @Transactional
    public void registerUser(String login) {
        // TODO: 26. 1. 2021 only for test
        User user = new User();
        user.setName("John Barney"+ UUID.randomUUID().toString().substring(0, 8));
        entityManager.persist(user);
        UserLogin userLogin = new UserLogin(user, login,"8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
        entityManager.persist(userLogin);
        System.out.println("OK..........");
    }


}
