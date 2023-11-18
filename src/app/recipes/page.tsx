import { Header } from "@/components/header";
import { RecipePreviews } from "@/components/recipe-preview";

export default function Recipes() {
	return (
		<>
			<Header />
			<main className="content-center">
				<RecipePreviews />
			</main>
		</>
	);
}
