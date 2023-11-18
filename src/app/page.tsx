import { Header } from "@/components/header";
import Image from "next/image";
import  homeBackground from "@/images/designs/homeBackground.svg";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center justify-between">
				<Image src={homeBackground} alt="hiii" className="w-full"/>
			</main>
		</>
	);
}
