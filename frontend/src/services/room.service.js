import axios from "axios";

const API_URL = "http://" + process.env.REACT_APP_HOST_IP_ADDRESS + ":8080/api/v1/room";

const hotelId = JSON.parse(localStorage.getItem("id"));

const getAll = () => {
	return axios
	.get(API_URL)
	.then(function (response) {
		console.log(response.data);
		return response;
	});
}

const getById = async () => {

	const GET_BY_ID_API_URL = API_URL + "/hotel/" + hotelId;

	const response = await axios
		.get(GET_BY_ID_API_URL);
	console.log(response.data);
	return response;
}

const roomService = {
	getAll,
	getById
};

export default roomService;