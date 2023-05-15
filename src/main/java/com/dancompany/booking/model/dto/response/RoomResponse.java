package com.dancompany.booking.model.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.OffsetDateTime;

public class RoomResponse {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("description")
    private String description;

    @JsonProperty("priceForDay")
    private Long priceForDay;

    @JsonProperty("startAllocationDateTime")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private OffsetDateTime startAllocationDateTime;

    @JsonProperty("endAllocationDateTime")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private OffsetDateTime endAllocationDateTime;

    @JsonProperty("owner")
    private HotelResponse owner;

    public RoomResponse id(Long id) {
        this.id = id;
        return this;
    }

    public RoomResponse name(String name) {
        this.name = name;
        return this;
    }

    public RoomResponse description(String description) {
        this.description = description;
        return this;
    }

    public RoomResponse priceForDay(Long priceForDay) {
        this.priceForDay = priceForDay;
        return this;
    }

    public RoomResponse startAllocationDateTime(OffsetDateTime startAllocationDateTime) {
        this.startAllocationDateTime = startAllocationDateTime;
        return this;
    }

    public RoomResponse endAllocationDateTime(OffsetDateTime endAllocationDateTime) {
        this.endAllocationDateTime = endAllocationDateTime;
        return this;
    }

    public RoomResponse owner(HotelResponse owner) {
        this.owner = owner;
        return this;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPriceForDay() {
        return priceForDay;
    }

    public void setPriceForDay(Long priceForDay) {
        this.priceForDay = priceForDay;
    }

    public OffsetDateTime getStartAllocationDateTime() {
        return startAllocationDateTime;
    }

    public void setStartAllocationDateTime(OffsetDateTime startAllocationDateTime) {
        this.startAllocationDateTime = startAllocationDateTime;
    }

    public OffsetDateTime getEndAllocationDateTime() {
        return endAllocationDateTime;
    }

    public void setEndAllocationDateTime(OffsetDateTime endAllocationDateTime) {
        this.endAllocationDateTime = endAllocationDateTime;
    }

    public HotelResponse getOwner() {
        return owner;
    }

    public void setOwner(HotelResponse owner) {
        this.owner = owner;
    }
}
