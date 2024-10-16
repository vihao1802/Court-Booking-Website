package com.court_booking_project.court_booking_server.service;

import com.court_booking_project.court_booking_server.entity.PaymentMethod;

import java.util.List;

public interface PaymentMethodService {
    PaymentMethod add(PaymentMethod paymentMethod);
    List<PaymentMethod> getAll();
    PaymentMethod getById(String id);

}
