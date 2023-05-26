import axios from "axios";

const API_URL = "http://" + process.env.REACT_APP_HOST_IP_ADDRESS + ":8080/api/v1";
// const API_URL = "http://localhost:8080/api/v1";

const login = async (email, password) => {
	const URL = API_URL + "/auth"
	const response = await axios
		.post(URL, {
			username: email,
			password: password
		});
	if (response.data.accessToken) {
		localStorage.setItem("user", JSON.stringify(response.data.accessToken));
		localStorage.setItem("id", JSON.stringify(response.data.id));
		localStorage.setItem("role", JSON.stringify(response.data.role));
	}
	return response.data;
};

const signUp = async (email, password, name, role) => {
	const URL = API_URL + "/registration/" + role

	console.log(URL)
	console.log(email)
	console.log(password)
	console.log(name)

	const response = await axios
		.post(URL, {
			email: email,
			password: password,
			name: name
		});
	return response.data;
};


const logout = () => {
	localStorage.removeItem("user");
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
};

const authService = {
	login,
	logout,
	signUp,
	getCurrentUser,
};

export default authService;