package com.court_booking_project.court_booking_server.repository;

import com.court_booking_project.court_booking_server.entity.CourtType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourtTypeRepository extends JpaRepository<CourtType,String> {
}
