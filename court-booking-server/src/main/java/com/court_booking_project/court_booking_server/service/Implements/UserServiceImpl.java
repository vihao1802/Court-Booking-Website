package com.court_booking_project.court_booking_server.service.Implements;

import com.court_booking_project.court_booking_server.Constant.PredefineRole;
import com.court_booking_project.court_booking_server.DTO.Request.CreateUserRequest;
import com.court_booking_project.court_booking_server.DTO.Response.UserResponse;
import com.court_booking_project.court_booking_server.Exception.AppException;
import com.court_booking_project.court_booking_server.Exception.ErrorCode;
import com.court_booking_project.court_booking_server.entity.Role;
import com.court_booking_project.court_booking_server.entity.User;
import com.court_booking_project.court_booking_server.repository.Interfaces.IUserRepository;
import com.court_booking_project.court_booking_server.service.Intefaces.IUserService;
import com.court_booking_project.court_booking_server.Mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements IUserService {

    private final IUserRepository userRepository;
    private final UserMapper userMapper;
    private final RoleServiceImpl roleServiceImpl;
//    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(IUserRepository userRepository, UserMapper userMapper, RoleServiceImpl roleServiceImpl) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.roleServiceImpl = roleServiceImpl;
    }

    @Override
    public UserResponse add(CreateUserRequest createUserRequest) {
        User user = userMapper.toUser(createUserRequest);
        Role userRole = roleServiceImpl.getByName(PredefineRole.USER_ROLE);
        user.setRole(userRole);
        log.info("User: " + user);

        try{
        userRepository.save(user);
        }catch(DataIntegrityViolationException ex){
            log.error(ex.getMessage());
            throw new AppException(ErrorCode.USER_EXISTED);
        }
        return userMapper.toUserResponse(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(String id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User update(String id, User user) {
        User userEntity =
                userRepository.findById(id).get();

        userRepository.save(userEntity);
        return user;
    }

}
