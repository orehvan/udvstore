package com.udv.udvstore.views.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.menubar.MenuBarVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

public class Header extends HorizontalLayout
{
    Image logo = new Image();
    TextField searchText = new TextField();
    MenuBar menuBar = new MenuBar();

    public Header()
    {
        addClassName("header");
        setHeight("5%");
        setWidthFull();
        setAlignItems(Alignment.CENTER);

        configureLogoImg();
        configureSearchText();
        configureMenuBar();

        add(
                logo,
                searchText,
                menuBar
        );
    }

    private void configureMenuBar()
    {
        menuBar.addThemeVariants(MenuBarVariant.LUMO_ICON);
        createButton(VaadinIcon.QUESTION_CIRCLE.create(), "FAQ");
        createButton(VaadinIcon.COIN_PILES.create(), "Баланс");
        createButton(VaadinIcon.CART.create(), "Корзина");
    }

    private void configureLogoImg()
    {
        logo.setSrc("img/logos/loginLogo.png");
        logo.setAlt("UDV Store");
        logo.setHeightFull();
    }

    private void configureSearchText()
    {
        searchText.setPlaceholder("Поиск");
        searchText.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchText.setWidthFull();
    }

    private void createButton(Component icon, String text)
    {
        var button = menuBar.addItem(icon, menuItemClickEvent -> {});
        button.add(new Text(text));
    }
}
