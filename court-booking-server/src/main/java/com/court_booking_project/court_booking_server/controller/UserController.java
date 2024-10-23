package com.court_booking_project.court_booking_server.controller;

import com.court_booking_project.court_booking_server.DTO.Request.CreateUserRequest;
import com.court_booking_project.court_booking_server.DTO.Response.UserResponse;
import com.court_booking_project.court_booking_server.entity.User;
import com.court_booking_project.court_booking_server.service.Intefaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class UserController {
    @Autowired
    private final IUserService userService;

    public UserController(IUserService userService) {
        this.userService = userService;
    }
    @PostMapping("/users/register")
    public UserResponse Register(@RequestBody @Valid CreateUserRequest createUserRequest) {
        return  userService.add(createUserRequest);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        User user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") String id,
                                           @RequestBody User user) {
        user = userService.update(id,user);
        return ResponseEntity.ok(user);
    }
}
