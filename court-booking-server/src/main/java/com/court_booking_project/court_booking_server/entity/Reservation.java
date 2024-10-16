package com.court_booking_project.court_booking_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.UUID;

@Entity
@Table( name = "reservations")
public class Reservation {

    @Id
    @UuidGenerator
    private String id;
    private Date checkInDate;
    private Date checkOutDate;
    private float totalPrice;
    private Date reservationDate;
    private int reservationState;
    private Date createdAt;

    @ManyToOne
    @JoinColumn(name = "courtId", referencedColumnName = "id", nullable = false)
    private Court court;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
    private User user;

    public Reservation() {
    }

    public Reservation(Date checkInDate, Date checkOutDate, float totalPrice, Date reservationDate, int reservationState, Date createdAt) {
        this.id = UUID.randomUUID().toString();
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.totalPrice = totalPrice;
        this.reservationDate = reservationDate;
        this.reservationState = reservationState;
        this.createdAt = createdAt;
    }

    public String getReservationId() {
        return id;
    }

    public void setReservationId(String id) {
        this.id = id;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(Date reservationDate) {
        this.reservationDate = reservationDate;
    }

    public int getReservationState() {
        return reservationState;
    }

    public void setReservationState(int reservationState) {
        this.reservationState = reservationState;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

}
