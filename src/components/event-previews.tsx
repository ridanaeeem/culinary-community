import Link from "next/link";
import { ImagePreview } from "./image-preview";
import * as G from "@/utils/getters";

export const EventPreviews = ({ events, limit }: { events: any[]; limit: number }) => {
	// console.log(events);
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit">
				{events
					.filter((event) => G.getPrice(event) <= limit)
					.map(function (event: any) {
						// console.log(event);
						// console.log(`@images/events/${getEventPreview(event)}`);
						if (!G.getPreview(event)) return null;
						return (
							<Link
								key={G.getId(event)}
								href={`/events/${G.getTitle(event).replace(/\s+/g, "-").toLowerCase()}`}
								className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
								<ImagePreview
									src={`https://culinary-community.vercel.app/images/events/${G.getPreview(event)}`}
									alt={G.getTitle(event)}
								/>
								<h2 className="text-xl">{G.getTitle(event)}</h2>
								<p>{G.getDescription(event)}</p>
							</Link>
						);
					})}
			</div>
		</div>
	);
};
