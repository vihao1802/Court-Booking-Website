package com.court_booking_project.court_booking_server.repository.Interfaces;

import com.court_booking_project.court_booking_server.entity.Court;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICourtRepository extends JpaRepository<Court,String> {
}
