package com.court_booking_project.court_booking_server.service.Intefaces;

import com.court_booking_project.court_booking_server.DTO.Request.CreateUserRequest;
import com.court_booking_project.court_booking_server.DTO.Response.UserResponse;
import com.court_booking_project.court_booking_server.entity.User;

import java.util.List;

public interface IUserService {
    UserResponse add(CreateUserRequest createUserRequest);

    List<User> getAll();

    User getById(String id);

    User update(String id, User user);
}
