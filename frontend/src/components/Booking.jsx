import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import hotelService from "../services/hotel.service";
import bookingService from "../services/booking.service";

const Booking = (props) => {

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {props.booking.room.name}
            </TableCell>
            <TableCell>
                {props.booking.room.startAllocationDateTime.split('T')[0]}{" "}
                {props.booking.room.startAllocationDateTime.split('T')[1].split('Z')[0].split(':')[0]}:
                {props.booking.room.startAllocationDateTime.split('T')[1].split('Z')[0].split(':')[1]}</TableCell>
            <TableCell>
                {props.booking.room.endAllocationDateTime.split('T')[0]}{" "}
                {props.booking.room.endAllocationDateTime.split('T')[1].split('Z')[0].split(':')[0]}:
                {props.booking.room.endAllocationDateTime.split('T')[1].split('Z')[0].split(':')[1]}</TableCell>
            <TableCell>
                <Button variant="outlined" startIcon={<DeleteIcon/>} color="error"
					onClick={ async (event) => {
						event.preventDefault();
						try {
							await bookingService.deleteBooking(props.booking.id).then(
								() => {
									window.location.reload();
								},
								(error) => {
									console.log(error);
								}
							);
						} catch (err) {
							console.log(err);
						}
					}}
				>
                    Удалить
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default Booking