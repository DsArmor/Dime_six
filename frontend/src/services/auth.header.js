export default function authHeader() {
	const user = JSON.parse(localStorage.getItem("user"));

	console.log(user);
	if (user) {
		return 'Bearer ' + user;
	} else {
		return 0;
	}
}