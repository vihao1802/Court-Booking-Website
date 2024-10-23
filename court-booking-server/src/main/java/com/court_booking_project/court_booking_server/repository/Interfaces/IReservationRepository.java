package com.court_booking_project.court_booking_server.repository.Interfaces;

import com.court_booking_project.court_booking_server.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservationRepository extends JpaRepository<Reservation, String> {
}
