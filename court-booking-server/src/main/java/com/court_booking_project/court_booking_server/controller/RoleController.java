package com.court_booking_project.court_booking_server.controller;

import com.court_booking_project.court_booking_server.DTO.Request.CreateRoleRequest;
import com.court_booking_project.court_booking_server.DTO.Response.RoleResponse;
import com.court_booking_project.court_booking_server.entity.Role;
import com.court_booking_project.court_booking_server.service.Intefaces.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class RoleController {
    @Autowired
    private final IRoleService roleService;

    public RoleController(IRoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/roles")
    public List<Role> getAllUsers() {
        return roleService.getAll();
    }

    @PostMapping("/roles")
    public RoleResponse addRole(@RequestBody CreateRoleRequest createRoleRequest) {
        return roleService.add(createRoleRequest);
    }
}
