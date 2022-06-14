package com.udv.udvstore;

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.udv.udvstore.database")
public class UdvstoreApplication extends SpringBootServletInitializer implements AppShellConfigurator
{

    public static void main(String[] args) {
        SpringApplication.run(UdvstoreApplication.class, args);
    }

}
