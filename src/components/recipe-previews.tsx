"use client";
import { Icon } from "@/components/quick-search";
import timeIcon from "@/images/designs/time.svg";
import veganIcon from "@/images/designs/vegan.svg";
import gfIcon from "@/images/designs/gf.svg";
import mediterraneanIcon from "@/images/designs/mediterranean.svg";
import desiIcon from "@/images/designs/desi.svg";
import chinaIcon from "@/images/designs/china.svg";
import { useState } from "react";
import { getTags } from "@/utils/getters";
import { Previews } from "./preview";

export const RecipePreviews = ({ recipes }: { recipes: any[] }) => {
	const [filter, setFilter] = useState("all");
	console.log(`filter: ${filter}`);
	recipes =
		filter !== "all"
			? recipes.filter((recipe) => {
					return getTags(recipe).includes(filter);
			  })
			: recipes;
	return (
		<>
			<div className="flex flex-col bg-[#F5F5F5] mb-10">
				<div className="m-10 text-center text-5xl text-black">
					Recipes by users, <div className="text-red-500 mt-4">for users ♡</div>
				</div>
				<div className="flex flex-row justify-center mb-7 text-3xl">
					<button onClick={() => (filter !== "<1 Hr" ? setFilter("<1 Hr") : setFilter("all"))}>
						<Icon imagesrc={timeIcon} alt="Timer" description="<1 Hr" />
					</button>
					<button onClick={() => (filter !== "Vegan" ? setFilter("Vegan") : setFilter("all"))}>
						<Icon imagesrc={veganIcon} alt="Leaf" description="Vegan" />
					</button>
					<button onClick={() => (filter !== "Gluten-Free" ? setFilter("Gluten-Free") : setFilter("all"))}>
						<Icon imagesrc={gfIcon} alt="Crossed out wheat" description="Gluten-Free" />
					</button>
					<button
						onClick={() => (filter !== "Mediterranean" ? setFilter("Mediterranean") : setFilter("all"))}>
						<Icon
							imagesrc={mediterraneanIcon}
							alt="Map of Mediterranean countries"
							description="Mediterranean"
						/>
					</button>
					<button onClick={() => (filter !== "Desi" ? setFilter("Desi") : setFilter("all"))}>
						<Icon imagesrc={desiIcon} alt="Map of South Asian subcontinent" description="Desi" />
					</button>
					<button onClick={() => (filter !== "Chinese" ? setFilter("Chinese") : setFilter("all"))}>
						<Icon imagesrc={chinaIcon} alt="Map of China" description="Chinese" />
					</button>
				</div>
			</div>
			{/* <div className="flex flex-row"> */}
			{/* <div className="content-center"> */}
			<div className="flex flex-wrap justify-start">
				<Previews objects={recipes} />
			</div>
			{/* </div> */}
			{/* </div> */}
		</>
	);
};
