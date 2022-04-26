package com.udv.store.service;

import com.udv.store.database.UserRepository;
import com.udv.store.models.User;
import com.udv.store.models.UserRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepo;

    private static List<User> users = new ArrayList<>();
    static {
        users.add(new User(1L, UserRoles.CUSTOMER, 10));
        users.add(new User(2L, UserRoles.CUSTOMER, 100));
        users.add(new User(3L, UserRoles.MANAGER, 0));
    }

    @PostConstruct
    public void init() {
        userRepo.saveAll(users);
    }

    public User findById()
    {
        return userRepo.findById(1L).orElse(null);
    }
}
