package com.court_booking_project.court_booking_server.DTO.Response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)

public class RoleResponse {
    private String Id;
    private String roleName;
}
