import Link from "next/link";
import * as G from "@/utils/getters";

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
			<div className="absolute w-full mx-0 brightness-50 bg-[#F5F5F5]">
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
						<div className="text-5xl mr-2 mt-1 text-black">{event.title}</div>
						<div className="text-2xl text-red-400 mt-4">
							{G.getAttendees(event).length}/{G.getCapacity(event)} spots filled
						</div>
					</div>
					<div className="flex flex-row">{tags}</div>
				</h2>

				<div className="text-3xl mt-2 mb-4">
					<p>{G.getDescription(event)}</p>
					<p>Host: {G.getHosts(event)}</p>
					<br></br>
					<p>Date: {G.getDate(event)}</p>
					<p>Location: {G.getLocation(event)}</p>
					<p>{event.time}</p>
				</div>
			</div>
		</div>
	);
};
