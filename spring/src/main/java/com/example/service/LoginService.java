package com.example.service;

import javax.transaction.Transactional;

import com.example.Application;
import com.example.model.UserModel;
import com.example.repo.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class LoginService {
    private final UserRepository userRepo;

    @Autowired
    public LoginService(UserRepository userRepo){
        this.userRepo = userRepo;
    }

    public UserModel findByUserEmail(String email){
        return userRepo.findByEmail(email);
    }

    public void deleteSession(){ 
        Application.CURRENT_USER = "";
    }

    public UserModel findByUserName(String username) {
        return userRepo.findByUsername(username);
    }
    
}
