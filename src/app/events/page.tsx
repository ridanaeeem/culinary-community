import { Header } from "@/components/header";
import { EventPreviews } from "@/components/event-previews";
import Link from "next/link";
const axios = require("axios");

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
				<main className="content-center">
					<EventPreviews events={data} />
				</main>
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		return (
			<>
				<Header />
				<main>
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
				</main>
			</>
		);
	}
}
