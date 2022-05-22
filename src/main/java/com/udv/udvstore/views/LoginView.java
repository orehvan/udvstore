package com.udv.udvstore.views;

import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.login.LoginI18n;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route("login")
@PageTitle("Вход | UDV Store")
public class LoginView extends VerticalLayout implements BeforeEnterObserver {
    private final LoginForm login = new LoginForm();

    public LoginView() {
        addClassName("login-view");
        setSizeFull();
        setAlignItems(Alignment.CENTER);
        setJustifyContentMode(JustifyContentMode.CENTER);

        configureLoginForm();

        add(
                createLogoImg(),
                login
        );
    }

    private void configureLoginForm() {
        var i18n = LoginI18n.createDefault();
        var i18nForm = i18n.getForm();
        i18nForm.setTitle("Добро пожаловать!");
        i18nForm.setUsername("Логин");
        i18nForm.setPassword("Пароль");
        i18nForm.setSubmit("Войти");
        i18nForm.setForgotPassword(null);
        i18n.setForm(i18nForm);

        var i18nErrorMessage = i18n.getErrorMessage();
        i18nErrorMessage.setTitle("Неправильный логин или пароль");
        i18nErrorMessage.setMessage("Проверьте правильность введённых данных и попробуйте снова.");
        i18n.setErrorMessage(i18nErrorMessage);

        login.setI18n(i18n);
        login.setAction("login");
    }

    private Image createLogoImg() {
        var logo = new Image();
        logo.setSrc("img/logos/loginLogo.png");
        logo.setAlt("UDV Store");
        logo.setWidth("10%");

        return logo;
    }

    @Override
    public void beforeEnter(BeforeEnterEvent beforeEnterEvent) {
        if(beforeEnterEvent.getLocation()
                .getQueryParameters()
                .getParameters()
                .containsKey("error")) {
            login.setError(true);
        }
    }
}
