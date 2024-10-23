package com.court_booking_project.court_booking_server.service.Intefaces;

import com.court_booking_project.court_booking_server.entity.PaymentMethod;

import java.util.List;

public interface IPaymentMethodService {
    PaymentMethod add(PaymentMethod paymentMethod);
    List<PaymentMethod> getAll();
    PaymentMethod getById(String id);

}
