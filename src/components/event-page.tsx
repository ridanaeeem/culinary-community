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
	return event.date ? event.date : "[EVENT DATE]";
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

	return (
		<div className="flex flex-col gap-5 p-5 w-[20rem]% items-start">
			<h2 className="flex flex-col justify-between text-3xl font-normal">{event.title}</h2>
			<h4 className="text-lg">Tags</h4>
			<ul className="flex flex-row">
				{getEventTags(event).map((tag: any, i: number) => (
					<li key={i} className="mx-1 p-2 border-solid border-2 border-black">
						{tag}
					</li>
				))}
			</ul>
			<p>{getEventDescription(event)}</p>
			<p>{getEventDate(event)}</p>
			<p>{getEventLocation(event)}</p>
			<p>{getEventHosts(event)}</p>
			<p>
				{getEventAttendees(event).length}/{getEventCapacity(event)}
			</p>
		</div>
	);
};
