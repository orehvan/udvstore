package com.udv.store.models;

import com.vaadin.flow.component.template.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User
{
    @Id
    private long id;
    private UserRoles userRoles;
    private int balance;

    public User(long id, UserRoles userRoles, int balance)
    {
        this.id = id;
        this.userRoles = userRoles;
        this.balance = balance;
    }

    public int getBalance()
    {
        return balance;
    }

    public void addBalance(Integer coins)
    {
        this.balance += coins;
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        this.id = id;
    }

    public UserRoles getUserRoles()
    {
        return userRoles;
    }

    public void setUserRoles(UserRoles userRoles)
    {
        this.userRoles = userRoles;
    }
}
