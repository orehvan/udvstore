package com.udv.store.views;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.router.Route;

@Route("authorization")
public class AuthorizationPage extends Div {
    public AuthorizationPage() {
        var loginForm = new LoginForm();
        add(loginForm);


    }
}
