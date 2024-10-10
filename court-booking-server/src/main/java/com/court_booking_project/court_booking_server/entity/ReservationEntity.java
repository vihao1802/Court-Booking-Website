package com.court_booking_project.court_booking_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

import java.util.Date;
import java.util.UUID;

@Entity
@Table( name = "reservations")
public class ReservationEntity {

    @Id
    @GeneratedValue
    private UUID reservationId;
    private Date checkInDate;
    private Date checkOutDate;
    private float totalPrice;
    private Date reservationDate;
    private int reservationState;
    private Date createdAt;
    private Date updatedAt;

    public ReservationEntity() {
    }

    public ReservationEntity(UUID reservationId, Date checkInDate, Date checkOutDate, float totalPrice, Date reservationDate, int reservationState, Date createdAt, Date updatedAt) {
        this.reservationId = reservationId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.totalPrice = totalPrice;
        this.reservationDate = reservationDate;
        this.reservationState = reservationState;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public UUID getReservationId() {
        return reservationId;
    }

    public void setReservationId(UUID reservationId) {
        this.reservationId = reservationId;
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

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
