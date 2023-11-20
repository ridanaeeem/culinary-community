import React from "react";
import { EventPage } from "@/components/event-page";
import { Header } from "@/components/header";
import { getTitle } from "@/utils/getters";

const axios = require("axios");

export default async function ViewEvent({ params }: { params: { title: string } }) {
	try {
		console.log(params);
		const response = await axios.get("https://culinary-community.vercel.app/api/events"); // replace with deployment endpoint
		const data = response.data;
		if (!(data instanceof Array)) {
			throw new Error("Response data is not an array");
		}
		const event = data.filter((event: any) => getTitle(event).replace(/\s+/g, "-").toLowerCase() === params.title);
		return (
			<>
				<Header />
				<EventPage event={event[0]} />
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}
