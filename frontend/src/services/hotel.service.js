import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://" + process.env.REACT_APP_HOST_IP_ADDRESS + ":8080/api/v1/hotel";
// const API_URL = "http://localhost:8080/api/v1/hotel";

const hotelId = JSON.parse(localStorage.getItem("id"));

const createRoom = async (name, desc, price, start, end) => {

	const CREATE_API_URL = API_URL + "/" + hotelId + "/room";

	console.log(CREATE_API_URL);
	if (end - start <= 0 || start - new Date() < 0) {
		throw new Error('Неверный временной интервал')
	}

	const response = await axios
		.post(CREATE_API_URL, {
			name: name,
			priceForDay: price,
			description: desc,
			startAllocationDateTime: start,
			endAllocationDateTime: end
		}, {
			headers: {
				'Authorization': authHeader()
			}
		});
}

const hotelService = {
	createRoom,
};

export default hotelService;