import { Header } from "@/components/header";
import { Features } from "@/components/features";
import Image from "next/image";
import  homeBackground from "@/images/designs/homeBackground.svg";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-between">
				<Image src={homeBackground} alt="hiii" className="w-full"/>
				<Features />
			</main>
		</>
	);
}
