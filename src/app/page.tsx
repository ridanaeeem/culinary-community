import Image from "next/image";
import homeBackground from "@/images/designs/homeBackground.svg";
import { Header } from "@/components/header";
import { Features } from "@/components/features";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-between">
				<br></br>
				<br></br>
				<br></br>
				<Link href="/events">Events</Link>
				<Link href="/recipes">Recipes</Link>
				<Image src={homeBackground} alt="hiii" className="w-full" />
				<Features />
			</main>
		</>
	);
}
