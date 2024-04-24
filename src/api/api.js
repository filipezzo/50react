import axios from "axios";

export const api = axios.create({
	baseURL: "https://662917db54afcabd07382693.mockapi.io/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
});
