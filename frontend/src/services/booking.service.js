import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://"  + process.env.REACT_APP_HOST_IP_ADDRESS + ":8080/api/v1/backpacker";
// const API_URL = "http://localhost:8080/api/v1/backpacker";

const backpackerId = JSON.parse(localStorage.getItem("id"));

const createBooking = async (start, end, roomId) => {

	const CREATE_API_URL = API_URL + "/" + backpackerId + "/room/" + roomId + "/booking";

	console.log(CREATE_API_URL);
	if (end - start <= 0 || start - new Date() < 0) {
		throw new Error('Неверный временной интервал')
	}

	const response = await axios
		.post(CREATE_API_URL, {
			startBookingDateTime: start,
			endBookingDateTime: end
		}, {
			headers: {
				'Authorization': authHeader()
			}
		});
}

const getBookings = async () => {

	const GET_API_URL = API_URL + "/" + backpackerId + "/booking";

	console.log(GET_API_URL);

	const response = await axios
		.get(GET_API_URL, {
			headers: {
				'Authorization': authHeader()
			}
		});
	return response;
}

const deleteBooking = async (bookingId) => {

	const GET_API_URL = API_URL + "/" + backpackerId + "/room/booking/" + bookingId;

	console.log(GET_API_URL);

	const response = await axios
		.delete(GET_API_URL, {
			headers: {
				'Authorization': authHeader()
			}
		});
	return response;
}


const bookingService = {
	createBooking,
	getBookings,
	deleteBooking
};

export default bookingService;