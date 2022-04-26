package com.udv.store;

import com.udv.store.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class UdvstoreApplication
{
    final
    UserService userService;

    public UdvstoreApplication(UserService userService)
    {
        this.userService = userService;
    }

    public static void main(String[] args)
    {
        SpringApplication.run(UdvstoreApplication.class, args);
    }

}
