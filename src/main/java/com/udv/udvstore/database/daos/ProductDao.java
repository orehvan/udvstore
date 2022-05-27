package com.udv.udvstore.database.daos;

import com.udv.udvstore.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDao extends MongoRepository<Product, Long> {
    public Product findProductByName(String name);
    public Product findProductById(Long id);
}
