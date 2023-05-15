package com.dancompany.booking.model.dto.response;

import com.dancompany.booking.model.dto.request.BookingRequest;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.OffsetDateTime;

public class BookingResponse {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("startBookingDateTime")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private OffsetDateTime startBookingDateTime;

    @JsonProperty("endBookingDateTime")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private OffsetDateTime endBookingDateTime;

    public BookingResponse id(Long id) {
        this.id = id;
        return this;
    }

    public BookingResponse startBookingDateTime(OffsetDateTime startBookingDateTime) {
        this.startBookingDateTime = startBookingDateTime;
        return this;
    }

    public BookingResponse endBookingDateTime(OffsetDateTime endBookingDateTime) {
        this.endBookingDateTime = endBookingDateTime;
        return this;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OffsetDateTime getStartBookingDateTime() {
        return startBookingDateTime;
    }

    public void setStartBookingDateTime(OffsetDateTime startBookingDateTime) {
        this.startBookingDateTime = startBookingDateTime;
    }

    public OffsetDateTime getEndBookingDateTime() {
        return endBookingDateTime;
    }

    public void setEndBookingDateTime(OffsetDateTime endBookingDateTime) {
        this.endBookingDateTime = endBookingDateTime;
    }
}
