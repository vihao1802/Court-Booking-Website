package com.court_booking_project.court_booking_server.service.Implements;

import com.court_booking_project.court_booking_server.entity.PaymentMethod;
import com.court_booking_project.court_booking_server.repository.Interfaces.IPaymentMethodRepository;
import com.court_booking_project.court_booking_server.service.Intefaces.IPaymentMethodService;

import java.util.List;

public class PaymentMethodServiceImpl implements IPaymentMethodService {

    private IPaymentMethodRepository paymentMethodRepository;

    public PaymentMethodServiceImpl(IPaymentMethodRepository paymentMethodRepository) {
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
