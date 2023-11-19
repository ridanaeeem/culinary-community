import { Header } from "@/components/header";
import { EventPreviews } from "@/components/event-previews";
const axios = require("axios");
import Link from "next/link";
import Image from "next/image";
import homeBackground from "@/../public/images/events/dumpling-making3.jpg";

export default async function Events() {
	try {
		const response = await axios.get("https://culinary-community.vercel.app/api/events"); // replace with deployment endpoint
		const data = response.data;
		if (!(data instanceof Array)) {
			throw new Error("Response data is not an array");
		}
		return (
			<>
				<Header />

				<div className="brightness-50 absolute">
					<Image src={homeBackground}></Image>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<div className="absolute text-white">
					<h1 className="text-7xl">Find Local Events</h1>
					<p className="text-2xl">Learn new skills with people right in your own community</p>
				</div>
				<div className="flex justify-center">
					<EventPreviews events={data} limit={Infinity} />
				</div>
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		return (
			<>
				<Header />
				<br></br>
				<br></br>
				<br></br>

				<div className="flex justify-center">
					<Header />
					<div className="flex flex-wrap justify-center w-fit">
						<Link
							key={1}
							href={`/events/${"[EVENT TITLE]".replace(/\s+/g, "-").toLowerCase()}`}
							className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
							<h2 className="text-xl">{"[EVENT TITLE]"}</h2>
							<p>{"[EVENT DESCRIPTION]"}</p>
						</Link>
					</div>
				</div>
			</>
		);
	}
}
