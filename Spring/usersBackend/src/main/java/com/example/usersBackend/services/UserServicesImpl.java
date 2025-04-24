package com.example.usersBackend.services;


import com.example.usersBackend.entities.user;
import com.example.usersBackend.repositories.UserRepositories;
import org.apache.catalina.User;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServicesImpl implements UserService {

    private final UserRepositories repositories;

    public UserServicesImpl(UserRepositories repositories) {
        this.repositories = repositories;
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return repositories.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(@NonNull Long id) {
        return repositories.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {
        return repositories.save(user);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        repositories.deleteById(id);
    }
}
