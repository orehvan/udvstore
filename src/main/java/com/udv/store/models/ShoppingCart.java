package com.udv.store.models;

import java.util.HashMap;

public class ShoppingCart
{

    private final HashMap<Product, Integer> productMap = new HashMap<>();

    public void addProduct(Product product)
    {
        productMap.put(product, productMap.getOrDefault(product, 0) + 1);
    }

    public HashMap<Product, Integer> deleteProduct(HashMap<Product, Integer> productMap, Product product)
    {
        if (productMap.containsKey(product) && productMap.get(product) > 0)
        {
            productMap.put(product, productMap.get(product) - 1);
        }
        return productMap;
    }
}
