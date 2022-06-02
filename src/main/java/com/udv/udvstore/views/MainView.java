package com.udv.udvstore.views;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.Lumo;

@Route("")
@PageTitle("Главная | UDV Store")
public class MainView extends VerticalLayout
{
    public MainView()
    {
        setClassName("main-view");
        setHeightFull();
        UI.getCurrent().getElement().getThemeList().add(Lumo.DARK);


        add(
                new Header()
        );
    }
}
