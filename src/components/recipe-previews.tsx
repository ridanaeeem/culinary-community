"use client";
import Link from "next/link";
import { ImagePreview } from "./image-preview";
import { Icon } from "@/components/quick-search";
import timeIcon from "@/images/designs/time.svg";
import veganIcon from "@/images/designs/vegan.svg";
import gfIcon from "@/images/designs/gf.svg";
import mediterraneanIcon from "@/images/designs/mediterranean.svg";
import desiIcon from "@/images/designs/desi.svg";
import chinaIcon from "@/images/designs/china.svg";
import { useState } from "react";
import * as G from "@/utils/getters";

export const RecipePreviews = ({ recipes }: { recipes: any[] }) => {
	const [filter, setFilter] = useState("all");
	console.log(`filter: ${filter}`);
	recipes =
		filter !== "all"
			? recipes.filter((recipe) => {
					return G.getTags(recipe).includes(filter);
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
			<div className="flex flex-row">
				<div className="content-center">
					<div className="flex justify-center">
						<div className="flex flex-wrap justify-center w-fit mx-10">
							{recipes.map(function (recipe: any) {
								if (!recipe) {
									return null;
								}
								const tags = G.getTags(recipe).map((tag: string, i: number) => (
									<p
										key={i}
										className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
										{tag}
									</p>
								));
								return (
									<Link
										key={G.getId(recipe)}
										href={`/recipes/${G.getTitle(recipe).replace(/\s+/g, "-").toLowerCase()}`}
										className="bg-[#F5F5F5] rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
										<div>
											<ImagePreview
												src={`https://culinary-community.vercel.app/images/recipes/${G.getPreview(
													recipe
												)}`}
												alt={G.getTitle(recipe)}
											/>
										</div>
										<h2 className="text-xl mt-3">{G.getTitle(recipe)}</h2>
										<div className="flex flex-wrap">{tags}</div>
										<p>{G.getDescription(recipe)}</p>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
