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
				<br></br>
				<br></br>
				<br></br>

				<div className="brightness-50 width-100% z-n10">
					<Image src={homeBackground} alt={"background image"}></Image>
				</div>
				<div className="absolute top-0 text-white text-center px-60 m-40 z-10">
					<h1 className="text-7xl shadow-2xl">Find Local Events</h1>
					<p className="text-4xl my-14 shadow-2xl">
						Learn new skills and meet new people right in your own community.
					</p>
					<Link href="/" className="text-4xl shadow-2xl">
						We believe that there should be no barriers to food access and education. Click here for our
						options for those who might need financial assistance, or to find out how you can share your
						resources to help others in your own community.
					</Link>
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
