package com.udv.udvstore.views;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

@Route("")
public class Header extends HorizontalLayout {
    public Header() {
        addClassName("header");

        add(
                createLogoImg(),
                createSearch(),
                createButton(VaadinIcon.QUESTION_CIRCLE.create(), "FAQ"),
                createButton(VaadinIcon.COIN_PILES.create(), "Баланс"),
                createButton(VaadinIcon.CART.create(), "Корзина")
        );
    }

    private MenuBar createMenuBar() {
        var menuBar = new MenuBar();
        menuBar.addItem(createButton(VaadinIcon.QUESTION_CIRCLE.create(), "FAQ"));
        menuBar.addItem(createButton(VaadinIcon.COIN_PILES.create(), "Баланс"));
        menuBar.addItem(createButton(VaadinIcon.CART.create(), "Корзина"));
        setWidth("25%");

        return menuBar;
    }

    private Image createLogoImg() {
        var logo = new Image();
        logo.setSrc("img/logos/loginLogo.png");
        logo.setAlt("UDV Store");

        return logo;
    }

    private TextField createSearch() {
        var search = new TextField();
        search.setPlaceholder("Поиск");
        search.setPrefixComponent(VaadinIcon.SEARCH.create());
        setWidth("50%");

        return search;
    }

    private Button createButton(Component icon, String text) {
        var button = new Button();
        button.setIcon(icon);
        button.setText(text);

        return button;
    }
}
