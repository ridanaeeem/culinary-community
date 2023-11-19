import Image from "next/image";
import homeBackground from "@/images/designs/homeBackground.svg";
import { Header } from "@/components/header";
import { Features } from "@/components/features";
import { Featured } from "@/components/featured";
import Link from "next/link";

const axios = require("axios");

export default async function Home() {
	try {
		const response = await axios.get("https://culinary-community.vercel.app/api/recipes"); // replace with deployment endpoint
		const data = response.data;
		if (!(data instanceof Array)) {
			throw new Error("Response data is not an array");
		}
		return (
			<>
				<Header />
				<main className="flex flex-col items-center justify-between">
					<br></br>
					<br></br>
					<br></br>
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
					<Featured recipes={data} />
				</main>
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		return (
			<>
				<Header />
				<main className="flex flex-col items-center justify-between">
					<br></br>
					<br></br>
					<br></br>
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
