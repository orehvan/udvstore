package Models;

import java.util.HashMap;

public class ShoppingCart {

    public ShoppingCart(HashMap<Product, Integer> productMap) {
        //view on click
    }

    public HashMap<Product, Integer> addProduct(HashMap<Product, Integer> productMap, Product product) {
        if(!productMap.containsKey(product))
            productMap.put(product, 1);
        else
            productMap.put(product, productMap.get(product) + 1);
        return productMap;
    }

    public HashMap<Product, Integer> deleteProduct(HashMap<Product, Integer> productMap, Product product) {
        if (productMap.containsKey(product) && productMap.get(product) > 0)
            productMap.put(product, productMap.get(product) - 1);
        return productMap;
    }
}
