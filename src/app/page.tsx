import Image from "next/image";
import homeBackground from "@/images/designs/homeBackground.svg";
import { Header } from "@/components/header";
import { Features } from "@/components/features";
import { Featured } from "@/components/featured";
import Link from "next/link";

const axios = require("axios");

export default async function Home() {
	try {
		const recipesResponse = await axios.get("https://culinary-community.vercel.app/api/recipes"); // replace with deployment endpoint
		const recipes = recipesResponse.data;
		const eventsResponse = await axios.get("https://culinary-community.vercel.app/api/events"); // replace with deployment endpoint
		const events = eventsResponse.data;
		if (!(recipes instanceof Array)) {
			throw new Error("Recipes response data is not an array");
		}
		if (!(events instanceof Array)) {
			throw new Error("Events response data is not an array");
		}
		return (
			<>
				<Header />
				<main className="flex flex-col items-center justify-between">
					<div>
						<div className="mx-10 text-center absolute left-20 top-32 w-20%">
							<p className="my-10 text-5xl">Connect with your community through food</p>
							<button className="m-10 px-5 py-2 text-4xl rounded-full bg-[#156E0E] text-white shadow-xl">
								Sign Up
							</button>
							<button className="px-7 py-2 text-4xl rounded-full bg-[#156E0E] text-white shadow-xl">
								Log In
							</button>
						</div>
					</div>
					<Image src={homeBackground} alt="hiii" className="w-full" />
					<Features />
					<Featured recipes={recipes} events={events} />
				</main>
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		return (
			<>
				<Header />
				<main className="flex flex-col items-center justify-between">
					<div>
						<div className="mx-10 text-center absolute left-20 top-32 w-20%">
							<p className="my-10 text-5xl">Connect with your community through food</p>
							<button className="m-10 px-5 py-2 text-4xl rounded-full bg-[#156E0E] text-white shadow-xl">
								Sign Up
							</button>
							<button className="px-7 py-2 text-4xl rounded-full bg-[#156E0E] text-white shadow-xl">
								Log In
							</button>
						</div>
					</div>
					<Image src={homeBackground} alt="hiii" className="w-full" />
					<Link href="/events">Events</Link>
					<Link href="/recipes">Recipes</Link>
					<Features />
				</main>
			</>
		);
	}
}
