package com.udv.udvstore.views;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route("")
@PageTitle("Главная | UDV Store")
public class MainView extends VerticalLayout
{
    public MainView()
    {
        setClassName("main-view");
        setHeightFull();

        var header = new Header();

        add(
                header
        );
    }
}
