import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Booking = (props) => {
  return (
		<TableRow>
			<TableCell component="th" scope="row">
				{props.booking.room.name}
			</TableCell>
			<TableCell numeric>{props.booking.startBookingDateTime}</TableCell>
			<TableCell numeric>{props.booking.endBookingDateTime}</TableCell>
		</TableRow>
		// <Grid item padding="20px">
		// 	<Typography gutterBottom variant="h5" component="div">
		// 	  {props.booking.room.name}
		// 	</Typography>
		// 	<Typography variant="body2" color="text.secondary" paddingBottom="2px">
		// 	  {props.booking.startBookingDateTime}
		// 	</Typography>
		// 	<Typography variant="body2" color="text.secondary" paddingBottom="2px">
		// 		{props.booking.endBookingDateTime}
		// 	</Typography>
		// </Grid>
  );
}

export default Booking