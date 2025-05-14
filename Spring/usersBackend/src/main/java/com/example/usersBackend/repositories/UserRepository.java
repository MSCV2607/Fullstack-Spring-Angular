package com.example.usersBackend.repositories;

import com.example.usersBackend.entities.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long>{

}
