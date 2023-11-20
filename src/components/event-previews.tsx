"use client";
import { Previews } from "./preview";
import { useState } from "react";
import { getPrice } from "@/utils/getters";
import Image from "next/image";
import Link from "next/link";
import homeBackground from "@/../public/images/events/dumpling-making3.jpg";

export const EventPreviews = ({ events }: { events: any[] }) => {
	const [limit, setLimit] = useState(Infinity);
	events =
		limit !== Infinity
			? events.filter((event) => {
					return getPrice(event) <= limit;
			  })
			: events;
	return (
		<>
			<div className="brightness-50 width-100% z-n10">
				<Image src={homeBackground} alt={"background image"} />
			</div>
			<div className="absolute top-0 text-white text-center px-60 m-40 z-10">
				<h1 className="text-7xl shadow-2xl">Find Local Events</h1>
				<p className="text-4xl my-14 shadow-2xl">
					Learn new skills and meet new people right in your own community.
				</p>
				<Link href="/" className="text-4xl shadow-2xl">
					We believe that there should be no barriers to food access and education. Click here for our options
					for those who might need financial assistance, or to find out how you can share your resources to
					help others in your own community.
				</Link>
			</div>
			{/* <div className="flex justify-center"> */}
			<div className="flex flex-wrap justify-start">
				<Previews objects={events} />
			</div>
			{/* </div> */}
		</>
	);
};
