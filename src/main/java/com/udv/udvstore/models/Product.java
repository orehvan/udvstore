package com.udv.udvstore.models;

import com.vaadin.flow.component.template.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
public class Product
{
    @Id
    private final Long id;
    private ProductSize productSize;
    private String img;
    private final String name;
    private final int price;

    public Product(Long id, ProductSize productSize, String path, String name, int price)
    {
        this.id = id;
        this.productSize = productSize;
        this.img = path;
        this.name = name;
        this.price = price;
    }

    public Product(Long id, String path, String name, int price)
    {
        this.id = id;
        this.img = path;
        this.name = name;
        this.price = price;
    }

    public Long getId()
    {
        return id;
    }

    public ProductSize getProductSize()
    {
        return productSize;
    }

    public void setProductSize(ProductSize productSize)
    {
        this.productSize = productSize;
    }

    public String getImg()
    {
        return img;
    }

    public void setImg(String img)
    {
        this.img = img;
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