import React, { FC } from "react";
import { EventsByTitle } from "@/data";
import { EventPage } from "@/components/event-page";
import { Header } from "@/components/header";

interface pageProps {
	params: { title: string };
}

const ViewRecipe: FC<pageProps> = ({ params }) => {
	const event = EventsByTitle[params.title];
	return (
		<>
			<Header />
			<EventPage event={event} />
		</>
	);
};

export default ViewRecipe;
