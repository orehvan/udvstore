package com.udv.store;

import com.udv.store.database.ProductRepository;
import com.udv.store.models.Product;
import com.udv.store.models.ProductSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class DownloadProduct
{
    private static final List<Product> products = new ArrayList<>();

    static
    {
        try
        {
            products.add(new Product(1L, ProductSize.L,
                    "https://drive.google.com/file/d/1uZFGxFXZybFuX97OLaxgMd4z-4WNsNML/view?usp=sharing",
                    "Толстовка", 100));
            products.add(new Product(2L,
                    "https://drive.google.com/file/d/10jTnfcbFKs54NJKstaH4zd3dKeaqg4h5/view?usp=sharing", "Шапка", 50));
            products.add(new Product(3L,
                    "https://drive.google.com/file/d/1MEN687jhJpc8BMQNzZ4iYs3-ljMXWC-Y/view?usp=sharing", "Кружка",
                    30));
        }
        catch (IOException e)
        {
            throw new RuntimeException(e);
        }
    }

    @Autowired
    private ProductRepository repository;

    @PostConstruct
    public void init()
    {
        repository.saveAll(products);
    }

    public List<Product> findAll()
    {
        return repository.findAll();
    }

}