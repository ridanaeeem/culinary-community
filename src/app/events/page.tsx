import { Header } from "@/components/header";
import { EventPreviews } from "@/components/event-previews";

export default function Recipes() {
	return (
		<>
			<Header />
			<main className="content-center">
				<EventPreviews limit={Infinity}/>
			</main>
		</>
	);
}
