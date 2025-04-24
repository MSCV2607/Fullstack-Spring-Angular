package com.example.usersBackend.repositories;

import com.example.usersBackend.entities.user;
import org.springframework.data.repository.CrudRepository;

public interface UserRepositories extends CrudRepository<user, Long> {



}
