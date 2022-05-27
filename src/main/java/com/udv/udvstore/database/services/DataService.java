package com.udv.udvstore.database.services;

import com.udv.udvstore.database.daos.ProductDao;
import com.udv.udvstore.models.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService
{
    private final ProductDao productDao;

    public DataService(ProductDao productDao)
    {
        this.productDao = productDao;
    }

    public List<Product> findAllProducts()
    {
        return productDao.findAll();
    }
}
