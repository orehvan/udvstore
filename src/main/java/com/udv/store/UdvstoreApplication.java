package com.udv.store;

import com.vaadin.flow.spring.annotation.EnableVaadin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
@EnableVaadin
public class UdvstoreApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(UdvstoreApplication.class, args);
    }

}
