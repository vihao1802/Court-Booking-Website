package com.court_booking_project.court_booking_server.service;

import com.court_booking_project.court_booking_server.entity.PaymentMethod;
import com.court_booking_project.court_booking_server.repository.PaymentMethodRepository;

import java.util.List;

public class PaymentMethodServiceImpl implements PaymentMethodService {

    private PaymentMethodRepository paymentMethodRepository;

    public PaymentMethodServiceImpl(PaymentMethodRepository paymentMethodRepository) {
        this.paymentMethodRepository = paymentMethodRepository;
    }

    @Override
    public PaymentMethod add(PaymentMethod paymentMethod) {
        return paymentMethodRepository.save(paymentMethod);
    }

    @Override
    public List<PaymentMethod> getAll() {
        return paymentMethodRepository.findAll();
    }

    @Override
    public PaymentMethod getById(String id) {
        return paymentMethodRepository.findById(id).get();
    }

}
