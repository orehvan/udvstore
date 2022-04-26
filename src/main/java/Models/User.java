package Models;

import com.vaadin.flow.component.template.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;
@Document
public class User {
   @Id
    Long id;
    UserRoles userRoles;
    Integer balance;
    HashMap<Product, Integer> productMap = new HashMap<>();

    public User(Long id, UserRoles userRoles, Integer balance) {
        this.id = id;
        this.userRoles = userRoles;
        this.balance = balance;
    }

    public Integer getBalance() {
        return balance;
    }

    public void addBalance(Integer coins) {
        this.balance += coins;
    }

    public HashMap<Product, Integer> getProductMap() {
        return productMap;
    }

}
