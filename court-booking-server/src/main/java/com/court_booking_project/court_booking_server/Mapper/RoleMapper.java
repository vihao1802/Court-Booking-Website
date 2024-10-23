package com.court_booking_project.court_booking_server.Mapper;

import com.court_booking_project.court_booking_server.DTO.Request.CreateRoleRequest;
import com.court_booking_project.court_booking_server.DTO.Response.RoleResponse;
import com.court_booking_project.court_booking_server.entity.Role;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface RoleMapper {
    Role toRole(CreateRoleRequest createRoleRequest);

    RoleResponse toRoleResponse(Role role);
}
