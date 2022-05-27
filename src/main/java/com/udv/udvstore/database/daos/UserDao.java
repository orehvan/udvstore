package com.udv.udvstore.database.daos;

import com.udv.udvstore.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends MongoRepository<User, Long> {
    //public User findById(Long id);
}