package com.court_booking_project.court_booking_server.repository.Interfaces;

import com.court_booking_project.court_booking_server.entity.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPaymentMethodRepository extends JpaRepository<PaymentMethod, String> {
}
