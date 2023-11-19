// import { Header } from "@/components/header";
// import { EventPreviews } from "@/components/event-previews";

// export default function Recipes() {
// 	return (
// 		<>
// 			<Header />
// 			<main className="content-center">
// 				<EventPreviews limit={Infinity} />
// 			</main>
// 		</>
// 	);
// }
"use client";
import { useEffect, useState } from "react";
import { Event } from "@/types";
import Link from "next/link";

interface EventsProps {
	events: Array<Event>;
}

function Event({ events }: EventsProps) {
	// Use state to manage the events
	const [eventList, setEventList] = useState(events);

	// Fetch data on the client side
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(process.env.API_URL as string);
			const data = await res.json();
			setEventList(data);
		};

		fetchData();
	}, []);
	if (!eventList) return <div>Loading...</div>;
	return (
		<div>
			<h1>Event List</h1>
			<h2>Click On Event to see it individually</h2>
			{eventList.map((evt) => (
				<div key={evt._id}>
					<Link href={`/events/${evt._id}`}>
						<h3 style={{ cursor: "pointer" }}>{evt.title}</h3>
					</Link>
				</div>
			))}
		</div>
	);
}

export default Event;
