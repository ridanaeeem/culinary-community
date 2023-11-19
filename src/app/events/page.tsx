import { EventPreviews } from "@/components/event-previews";
const axios = require("axios");

async function fetchData() {
	try {
		const response = await axios.get("http://localhost:3000/api/events"); // replace with deployment endpoint
		const data = response.data;
		if (!(data instanceof Array)) {
			throw new Error("Response data is not an array");
		}
		return <EventPreviews events={data} limit={Infinity} />;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

export default fetchData;
