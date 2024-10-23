package com.court_booking_project.court_booking_server.service.Implements;

import com.court_booking_project.court_booking_server.DTO.Request.CreateRoleRequest;
import com.court_booking_project.court_booking_server.DTO.Response.RoleResponse;
import com.court_booking_project.court_booking_server.Mapper.RoleMapper;
import com.court_booking_project.court_booking_server.entity.Role;
import com.court_booking_project.court_booking_server.repository.Interfaces.IRoleRepository;
import com.court_booking_project.court_booking_server.service.Intefaces.IRoleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements IRoleService {

    private final IRoleRepository roleRepository;
    private final RoleMapper roleMapper;

    public RoleServiceImpl(IRoleRepository roleRepository, RoleMapper roleMapper) {
        this.roleRepository = roleRepository;
        this.roleMapper = roleMapper;
    }

    @Override
    public List<Role> getAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role getByName(String roleName) {
        return roleRepository.findByRoleName(roleName);
    }

    @Override
    public Role get(String id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public RoleResponse add(CreateRoleRequest createRoleRequest) {
        Role newRole = roleMapper.toRole(createRoleRequest);
        roleRepository.save(newRole);
        return roleMapper.toRoleResponse(newRole);
    }
}
