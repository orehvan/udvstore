package Models;

import javax.swing.*;
import java.awt.*;

public class Product {
    ProductSize productSize;
    Image image;
    String name;
    Integer price;

    public Product(ProductSize productSize, Image image, String name, Integer price) {
        this.productSize = productSize;
        this.image = image;
        this.name = name;
        this.price = price;
    }

    public Product(Image image, String name, Integer price) {
        this.image = image;
        this.name = name;
        this.price = price;
    }
}
