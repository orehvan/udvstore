package com.udv.udvstore.views;

import com.udv.udvstore.models.Product;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class ProductCard extends VerticalLayout
{
    Image img = new Image();
    Button addToCartButton = new Button();
    public ProductCard(Product product)
    {
        addClassName("product-card");

        setAlignItems(Alignment.CENTER);

        configureImg(product.getImg(), product.getName());
        configureButton();

        add(
                img,
                new H3(product.getName()),
                addToCartButton
        );
    }

    private void configureButton()
    {
        addToCartButton.addThemeVariants(ButtonVariant.LUMO_ICON);
        addToCartButton.setText("В корзину");
        addToCartButton.setIcon(VaadinIcon.CART_O.create());
        addToCartButton.setIconAfterText(true);
    }

    private void configureImg(String src, String alt)
    {
        img.setSrc(src);
        img.setAlt(alt);
    }
}
