import type { Event } from "@/types";
import { Events } from "@/data";
import Link from "next/link";
import { ImagePreview } from "./image-preview";

export const EventPreviews = ({limit}: {limit: number}) => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit">
				{Events.filter((event) => event.price <= limit).map(function (event: Event) {
					const { id, title, description, preview } = event;
					return (
						<Link
							key={id}
							href={`/events/${title.replace(/\s+/g, "-").toLowerCase()}`}
							className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
							<ImagePreview image={preview} />
							<h2 className="text-xl">{title}</h2>
							<p>{description}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
