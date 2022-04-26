package com.udv.store.models;

import java.awt.*;

public class Product
{
    private ProductSize productSize;
    private final Image image;
    private final String name;
    private final int price;

    public Product(ProductSize productSize, Image image, String name, int price)
    {
        this.productSize = productSize;
        this.image = image;
        this.name = name;
        this.price = price;
    }

    public Product(Image image, String name, int price)
    {
        this.image = image;
        this.name = name;
        this.price = price;
    }
}