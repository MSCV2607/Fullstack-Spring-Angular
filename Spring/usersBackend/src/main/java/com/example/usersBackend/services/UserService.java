package com.example.usersBackend.services;

import com.example.usersBackend.entities.user;
import org.apache.catalina.User;
import org.springframework.lang.NonNull;

import java.util.*;


public interface UserService {
    List<User> findAll();
    Optional<User> findById(@NonNull Long id);
    User save(User user);
    void deleteById(Long id);
}