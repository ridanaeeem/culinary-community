import { Header } from "@/components/header";
import { RecipePreviews } from "@/components/recipe-preview";
import { Icon } from "@/components/quick-search";
import timeIcon from "@/images/designs/time.svg";

export default function Recipes() {
	return (
		<>
			<Header />
			<br></br>
			<br></br>
			<br></br>

			<p className="m-10 text-center text-2xl text-[#156E0E]">Recipes by users, for users ♡</p>

			<main className="content-center">
				<div className="flex flex-row m-10">
					<Icon imagesrc={timeIcon} alt="Timer" description="<1 Hr" />
					<Icon imagesrc={timeIcon} alt="Timer" description="Vegetarian" />
					<Icon imagesrc={timeIcon} alt="Timer" description="Gluten-Free" />
					<Icon imagesrc={timeIcon} alt="Timer" description="Mediterranean" />
					<Icon imagesrc={timeIcon} alt="Timer" description="Desi" />
					<Icon imagesrc={timeIcon} alt="Timer" description="Chinese" />
					<Icon imagesrc={timeIcon} alt="Timer" description="Italian" />
				</div>
				<div className="flex flex-row">
					<div className="content-center">
						<RecipePreviews />
					</div>
				</div>
			</main>
		</>
	);
}
