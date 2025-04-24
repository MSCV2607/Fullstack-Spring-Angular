package com.example.usersBackend.services;


import com.example.usersBackend.repositories.UserRepositories;
import org.apache.catalina.User;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServicesImpl implements UserService {


    private UserRepositories repositories;

    public UserServicesImpl(UserRepositories repositories) {
        this.repositories = repositories;
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List) this.repositories.findAll()
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findById(@NonNull Long id) {
        return repositories.findById(id);
    }

    @Transactional
    @Override
    public User save(User user) {
        return repositories.save(user);
    }

    @Transactional
    @Override
    public void delateById(Long id) {
        repositories.deleteById(id);

    }
}
