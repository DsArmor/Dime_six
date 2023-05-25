package com.dancompany.booking.controllers;

import com.dancompany.booking.model.dto.request.BackpackerRequest;
import com.dancompany.booking.model.dto.request.BookingRequest;
import com.dancompany.booking.model.dto.response.BackpackerResponse;
import com.dancompany.booking.model.dto.response.BookingResponse;
import com.dancompany.booking.model.dto.response.BookingResponseForBackpacker;
import com.dancompany.booking.service.BackpackerService;
import com.dancompany.booking.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

import static com.dancompany.booking.exceptions.ExceptionWrapper.wrap;
import static com.dancompany.booking.exceptions.ExceptionWrapper.wrapWithoutResult;

@RestController
@RequestMapping("/api/v1/backpacker")
@RequiredArgsConstructor
public class BackpackerController {

    private final BackpackerService backpackerService;
    private final BookingService bookingService;

    /* Backpacker Rest methods */

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/{backpackerId}",
            produces = { "application/json" },
            consumes = { "application/json" }
    )
    public ResponseEntity<Void> updateById(
            @Positive @PathVariable("backpackerId") Long id,
            @Valid @RequestBody BackpackerRequest backpackerRequest) {
        return wrapWithoutResult(backpackerService::updateById, id, backpackerRequest);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/{backpackerId}",
            produces = { "application/json" }
    )
    public ResponseEntity<BackpackerResponse> getById(@Positive @PathVariable("backpackerId") Long id) {
        return wrap(backpackerService::getById, id);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/{backpackerId}",
            produces = { "application/json" }
    )
    public ResponseEntity<Void> deleteById(@Positive @PathVariable("backpackerId") Long id) {
        return wrapWithoutResult(backpackerService::deleteById, id);
    }

    /* Backpacker-Booking Rest methods */

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/{backpackerId}/room/{roomId}/booking",
            produces = { "application/json" }
    )
    public ResponseEntity<Object> createBooking(
            @Positive @PathVariable("backpackerId") Long backpackerId,
            @Positive @PathVariable("roomId") Long roomId,
            @RequestBody BookingRequest bookingRequest) {
        return wrap(bookingService::createBooking, backpackerId, roomId, bookingRequest);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            value = "/{backpackerId}/room/booking/{bookingId}",
            produces = { "application/json" }
    )
    public ResponseEntity<Void> updateBooking(
            @Positive @PathVariable("backpackerId") Long backpackerId,
            @Positive @PathVariable("bookingId") Long bookingId,
            @RequestBody BookingRequest bookingRequest) {
        return wrapWithoutResult(bookingService::updateBooking, backpackerId, bookingId, bookingRequest);
    }

    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/{backpackerId}/room/booking/{bookingId}",
            produces = { "application/json" }
    )
    public ResponseEntity<Void> deleteBooking(
            @Positive @PathVariable("backpackerId") Long backpackerId,
            @Positive @PathVariable("bookingId") Long bookingId) {
        return wrapWithoutResult(bookingService::deleteById, backpackerId, bookingId);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/{backpackerId}/booking",
            produces = { "application/json" }
    )
    public ResponseEntity<List<BookingResponseForBackpacker>> getByBackpackerId(
            @Positive @PathVariable("backpackerId") Long backpackerId) {
        return wrap(bookingService::getByBackpackerId, backpackerId);
    }

    @RequestMapping(
            method = RequestMethod.GET,
            value = "/{backpackerId}/room/{roomId}/booking",
            produces = { "application/json" }
    )
    public ResponseEntity<List<BookingResponse>> getByBackpackerIdAndRoomId(
            @Positive @PathVariable("backpackerId") Long backpackerId,
            @Positive @PathVariable("roomId") Long roomId) {
        return wrap(bookingService::getByBackpackerIdAndRoomId, backpackerId, roomId);
    }

}
