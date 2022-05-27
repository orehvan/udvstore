package com.udv.udvstore.views.components;

import com.udv.udvstore.models.Product;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.beans.factory.annotation.Autowired;

@Route("product")
public class ProductCard extends VerticalLayout
{
    Image img = new Image();
    Label name = new Label();
    Button button = new Button();

    public ProductCard()
    {
        setClassName("product-card");
        UI.getCurrent().getElement().getThemeList().add(Lumo.DARK);
    }
}
