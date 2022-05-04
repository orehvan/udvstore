package com.udv.store.models;

import com.vaadin.flow.component.template.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.IOException;

@Document
public class Product
{
    @Id
    private final Long id;
    private final String name;
    private final int price;
    public String img;
    private ProductSize productSize;

    public Product(Long id, ProductSize productSize, String path, String name, int price) throws IOException
    {
        this.id = id;
        this.productSize = productSize;
        this.img = path;
        this.name = name;
        this.price = price;
    }

    public Product(Long id, String path, String name, int price) throws IOException
    {
        this.id = id;
        this.img = path;
        this.name = name;
        this.price = price;
    }

    public ProductSize getProductSize()
    {
        return productSize;
    }

    public void setProductSize(ProductSize productSize)
    {
        this.productSize = productSize;
    }

    public String getName()
    {
        return name;
    }

    public int getPrice()
    {
        return price;
    }
}