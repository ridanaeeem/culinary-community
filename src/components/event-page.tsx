import Link from "next/link";
import Image from "next/image";

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

function getEventTags(event: any) {
	return event.tags ? event.tags : [];
}

function getEventDate(event: any) {
	const temp = event.date ? event.date : "[EVENT DATE]";
	return temp.slice(0, 10);
}

function getEventImages(event: any) {
	return event.images ? event.images : [0, 0];
}

function getEventLocation(event: any) {
	return event.location ? event.location : "[EVENT LOCATION]";
}

function getEventHosts(event: any) {
	return event.hosts ? event.hosts : [];
}

function getEventAttendees(event: any) {
	return event.attendees ? event.attendees : [];
}

function getEventCapacity(event: any) {
	return event.capacity ? event.capacity : Infinity;
}

export const EventPage = ({ event }: { event: any }) => {
	if (!event) return <div className="bg-black">Recipe not found</div>;

	const tags = event.tags.map((tag: any, i: number) => (
		<p key={i} className="mr-2 px-2 my-1 text-xl rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
			{tag}
		</p>
	));

	return (
		<div className="flex flex-col gap-5 p-5 w-[20rem]% items-start">
			<br></br>
			<br></br>
			<div className="absolute w-full mx-0 brightness-50 z-n10">
				{/* <div className="">
						<Image
							src={`https://culinary-community.vercel.app/images/events/${getEventImages(event)[1]}`}
							alt={getEventTitle(event)}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "334px" }}
						/>
					</div> */}
			</div>
			<div className="p-5 z-10">
				<Link href="/events" className="text-black">
					← Back to all events
				</Link>
				<h2 className="flex flex-col justify-between font-normal pr-12 mb-4">
					<div className="flex flex-row">
						<div className="text-5xl mr-2 mt-1 text-black">{event.title}</div>
						<div className="text-2xl text-red-400 mt-4">
							{getEventAttendees(event).length}/{getEventCapacity(event)} spots filled
						</div>
					</div>
					<div className="flex flex-row">{tags}</div>
				</h2>

				<div className="text-3xl mt-2 mb-4">
					<p>{getEventDescription(event)}</p>
					<p>Host: {getEventHosts(event)}</p>
					<br></br>
					<p>Date: {getEventDate(event)}</p>
					<p>Location: {getEventLocation(event)}</p>
					<p>{event.time}</p>
				</div>
			</div>
		</div>
	);
};
