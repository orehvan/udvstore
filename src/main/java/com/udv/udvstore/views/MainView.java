package com.udv.udvstore.views;

import com.udv.udvstore.database.DataService;
import com.udv.udvstore.database.ProductRepository;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.board.Board;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.Lumo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;

@Route("")
@PageTitle("Главная | UDV Store")
@Component
public class MainView extends VerticalLayout
{
    @Autowired
    DataService dataService;
    Board board = new Board();

    public MainView()
    {
        setClassName("main-view");
        setHeightFull();
//        UI.getCurrent().getElement().getThemeList().add(Lumo.DARK);

        configureBoard();

        add(
                new Header(),
                board
        );
    }

    private void configureBoard()
    {
        dataService.getAllProducts().forEach(product -> board.add(new ProductCard(product)));
    }
}
