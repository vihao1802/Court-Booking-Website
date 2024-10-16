package com.court_booking_project.court_booking_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table(name = "payment_methods")
public class PaymentMethod {

    @Id
    @UuidGenerator
    private String id;

    private String paymentMethodName;

    public PaymentMethod() {
    }

    public PaymentMethod(String paymentMethodName) {
        this.id = UUID.randomUUID().toString();
        this.paymentMethodName = paymentMethodName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPaymentMethodName() {
        return paymentMethodName;
    }

    public void setPaymentMethodName(String paymentMethodName) {
        this.paymentMethodName = paymentMethodName;
    }
}
