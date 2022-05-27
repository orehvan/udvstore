package com.udv.udvstore;

import com.udv.udvstore.database.daos.ProductDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UdvstoreApplication {
    final
    ProductDao productDao;

    public UdvstoreApplication(ProductDao productDao)
    {
        this.productDao = productDao;
    }

    public static void main(String[] args) {
        SpringApplication.run(UdvstoreApplication.class, args);


    }

}
