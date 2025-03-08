import axios from "axios";

const API = axios.create({
	baseURL: "https://logistic.flexcellents.com/api",
	headers: { "Content-Type": "application/json" },
});

export const loginUser = async (data) => {
	const res = await API.post("/user/login", { phone_number: data?.phone });
	return res;
};

export const VarifayOtp = async (data) => {
	console.log(data)
	const payload = {
		phone_number: data?.phone,
		otp: data?.otp
	}
	const res = await API.post("/user/login", payload);
	return res;
};

export const searchLocation = async (data, token) => {
	const payload = {
		from: data?.form_location,
		to: data?.end_location,
		date: "2025-03-06"
	}
	const res = await API.post("/search-vehicle",payload,
		{ headers: { Authorization: `Bearer ${token}` } }
	);
	return res;
};
