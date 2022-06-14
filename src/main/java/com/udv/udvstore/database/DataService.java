package com.udv.udvstore.database;

import com.udv.udvstore.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService
{
    @Autowired
    private ProductRepository productRepository;

    public DataService()
    {
    }

    public List<Product> getAllProducts()
    {
        return productRepository.findAll();
    }
}
