import type { Event } from "@/types";

export const EventPage = ({ event }: { event: Event }) => {
	if (!event) return <div className="bg-black">Recipe not found</div>;

	return (
		<div className="flex flex-col gap-5 p-5 w-[20rem]% items-start">
			<h2 className="flex flex-col justify-between text-3xl font-normal">{event.title}</h2>
			<h4 className="text-lg">Tags</h4>
			<ul className="flex flex-row">
				{event.tags.map((tag, i) => (
					<li key={i} className="mx-1 p-2 border-solid border-2 border-black">
						{tag}
					</li>
				))}
			</ul>
			<p>{event.description}</p>
			<p>{event.date}</p>
			<p>{event.time}</p>
			<p>{event.location}</p>
			<p>{event.hosts}</p>
			<p>
				{event.capacity}/{event.attendees.length}
			</p>
		</div>
	);
};
