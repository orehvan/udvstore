package com.udv.udvstore.database;

import com.udv.udvstore.models.Product;
import com.udv.udvstore.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product, Long> {
}
