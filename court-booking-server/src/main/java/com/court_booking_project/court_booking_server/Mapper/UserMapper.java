package com.court_booking_project.court_booking_server.Mapper;

import com.court_booking_project.court_booking_server.DTO.Request.CreateUserRequest;
import com.court_booking_project.court_booking_server.DTO.Response.UserResponse;
import com.court_booking_project.court_booking_server.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(CreateUserRequest createUserRequest);

    UserResponse toUserResponse(User user);
}
