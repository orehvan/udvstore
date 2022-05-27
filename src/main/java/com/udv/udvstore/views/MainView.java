package com.udv.udvstore.views;

import com.udv.udvstore.database.services.DataService;
import com.udv.udvstore.views.components.Header;
import com.udv.udvstore.views.components.ProductCard;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.board.Board;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.Lumo;

@Route("")
@PageTitle("Главная | UDV Store")
public class MainView extends VerticalLayout
{
    Board board = new Board();
    DataService dataService;

    public MainView(DataService dataService)
    {
        this.dataService = dataService;

        setClassName("main-view");
        setHeightFull();
        UI.getCurrent().getElement().getThemeList().add(Lumo.DARK);

        configureBoard();

        add(
                new Header(),
                board
        );
    }

    public void configureBoard()
    {

    }
}
