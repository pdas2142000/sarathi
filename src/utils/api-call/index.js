export const loginUser = async (data) => {
	const response = await fetch("https://logistic.flexcellents.com/api/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ phone_number: data?.phone }),
	});

	if (!response.ok) {
		throw new Error("Failed to log in");
	}

	return response.json();
};

export const VarifayOtp = async (data) => {
	const response = await fetch("https://logistic.flexcellents.com/api/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			phone_number: data?.phone,
			otp: data?.otp
		}),
	});

	if (!response.ok) {
		throw new Error("Failed to log in");
	}

	return response.json();
};

//search location

export const SearchLocation = async (data, token) => {

	const response = await fetch("https://logistic.flexcellents.com/api/search-vehicle", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: data?.form_location,
			to: data?.end_location,
			date: "2025-03-06",
		}),
	});

	if (!response.ok) {
		throw new Error("Failed to log in");
	}

	return response.json();
};

