package com.court_booking_project.court_booking_server.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.UUID;

@Entity
@Table( name = "payments")
public class Payment {

    @Id
    @UuidGenerator
    private String id;

    private Date paymentDate;
    private double paymentAmount;

    @ManyToOne
    @JoinColumn(name = "paymentMethodId",referencedColumnName = "id",nullable = false)
    private PaymentMethod paymentMethod;

    public Payment() {
    }

    public Payment(Date paymentDate, double paymentAmount) {
        this.id = UUID.randomUUID().toString();
        this.paymentDate = paymentDate;
        this.paymentAmount = paymentAmount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public double getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(double paymentAmount) {
        this.paymentAmount = paymentAmount;
    }
}
