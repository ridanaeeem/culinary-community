import Link from "next/link";
import { ImagePreview } from "./image-preview";

function getEventId(event: any) {
	return event._id ? event._id : "[EVENT ID]";
}

function getEventTitle(event: any) {
	return event.title ? event.title : "[EVENT TITLE]";
}

function getEventDescription(event: any) {
	return event.description ? event.description : "[EVENT DESCRIPTION]";
}

function getEventPreview(event: any) {
	return event.preview ? event.preview : null;
}

function getEventPrice(event: any) {
	return event.price ? event.price : Infinity;
}

export const EventPreviews = ({ events, limit }: { events: any[]; limit: number }) => {
	// console.log(events);
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit">
				{events
					.filter((event) => getEventPrice(event) <= limit)
					.map(function (event: any) {
						// console.log(event);
						// console.log(`@images/events/${getEventPreview(event)}`);
						if (!getEventPreview(event)) return null;
						return (
							<Link
								key={getEventId(event)}
								href={`/events/${getEventTitle(event).replace(/\s+/g, "-").toLowerCase()}`}
								className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
								<ImagePreview
									src={`https://culinary-community.vercel.app/images/events/${getEventPreview(
										event
									)}`}
									alt={getEventTitle(event)}
								/>
								<h2 className="text-xl">{getEventTitle(event)}</h2>
								<p>{getEventDescription(event)}</p>
							</Link>
						);
					})}
			</div>
		</div>
	);
};
