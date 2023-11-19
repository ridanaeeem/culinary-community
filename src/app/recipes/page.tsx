import { Header } from "@/components/header";
import { RecipePreviews } from "@/components/recipe-previews";
import { Icon } from "@/components/quick-search";
import timeIcon from "@/images/designs/time.svg";
import veganIcon from "@/images/designs/vegan.svg";
import gfIcon from "@/images/designs/gf.svg";
import mediterraneanIcon from "@/images/designs/mediterranean.svg";
import desiIcon from "@/images/designs/desi.svg";
import chinaIcon from "@/images/designs/china.svg";

const axios = require("axios");

export default async function Recipes() {
	try {
		const response = await axios.get("https://culinary-community.vercel.app/api/recipes"); // replace with deployment endpoint
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

				<main className="content-center">
					<div className="flex flex-col bg-[#F5F5F5] mb-10">
						<div className="m-10 text-center text-5xl text-black">
							Recipes by users, <div className="text-red-500 mt-4">for users ♡</div>
						</div>
						<div className="flex flex-row justify-center mb-7 text-3xl">
							<Icon imagesrc={timeIcon} alt="Timer" description="<1 Hr" />
							<Icon imagesrc={veganIcon} alt="Leaf" description="Vegan" />
							<Icon imagesrc={gfIcon} alt="Crossed out wheat" description="Gluten-Free" />
							<Icon
								imagesrc={mediterraneanIcon}
								alt="Map of Mediterranean countries"
								description="Mediterranean"
							/>
							<Icon imagesrc={desiIcon} alt="Map of South Asian subcontinent" description="Desi" />
							<Icon imagesrc={chinaIcon} alt="Map of China" description="Chinese" />
						</div>
					</div>
					<div className="flex flex-row">
						<div className="content-center">
							<RecipePreviews recipes={data} />
						</div>
					</div>
				</main>
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

				<main className="content-center">
					<div className="flex flex-col bg-[#F5F5F5] mb-10">
						<p className="m-10 text-center text-5xl text-black">
							Recipes by users, <div className="text-red-500 mt-4">for users ♡</div>
						</p>
						<div className="flex flex-row justify-center mb-7 text-3xl">
							<Icon imagesrc={timeIcon} alt="Timer" description="<1 Hr" />
							<Icon imagesrc={veganIcon} alt="Leaf" description="Vegan" />
							<Icon imagesrc={gfIcon} alt="Crossed out wheat" description="Gluten-Free" />
							<Icon
								imagesrc={mediterraneanIcon}
								alt="Map of Mediterranean countries"
								description="Mediterranean"
							/>
							<Icon imagesrc={desiIcon} alt="Map of South Asian subcontinent" description="Desi" />
							<Icon imagesrc={chinaIcon} alt="Map of China" description="Chinese" />
						</div>
					</div>
				</main>
			</>
		);
	}
}
