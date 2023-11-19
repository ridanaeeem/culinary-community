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

function getRecipeId(recipe: any) {
	return recipe._id ? recipe._id : "[RECIPE ID]";
}

function getRecipeTitle(recipe: any) {
	return recipe.title ? recipe.title : "[RECIPE TITLE]";
}

function getRecipeDescription(recipe: any) {
	return recipe.description ? recipe.description : "[RECIPE DESCRIPTION]";
}

function getRecipePreview(recipe: any) {
	return recipe.preview ? recipe.preview : null;
}

function getRecipeTags(recipe: any) {
	return recipe.tags ? recipe.tags : [];
}

function containsObject(obj: any, list: any[]) {
	var i;
	for (i = 0; i < list.length; i++) {
		if (list[i] === obj) {
			return true;
		}
	}

	return false;
}

export const RecipePreviews = ({ recipes }: { recipes: any[] }) => {
	const [filter, setFilter] = useState("all");
	console.log(`filter: ${filter}`);
	recipes =
		filter !== "all"
			? recipes.filter((recipe) => {
					return containsObject(filter, getRecipeTags(recipe));
			  })
			: recipes;
	return (
		<>
			<div className="flex flex-col bg-[#F5F5F5] mb-10">
				<div className="m-10 text-center text-5xl text-black">
					Recipes by users, <div className="text-red-500 mt-4">for users ♡</div>
				</div>
				<div className="flex flex-row justify-center mb-7 text-3xl">
					<button onClick={() => setFilter("<1 Hr")}>
						<Icon imagesrc={timeIcon} alt="Timer" description="<1 Hr" />
					</button>
					<button onClick={() => setFilter("Vegan")}>
						<Icon imagesrc={veganIcon} alt="Leaf" description="Vegan" />
					</button>
					<button onClick={() => setFilter("Gluten-Free")}>
						<Icon imagesrc={gfIcon} alt="Crossed out wheat" description="Gluten-Free" />
					</button>
					<button onClick={() => setFilter("Mediterranean")}>
						<Icon
							imagesrc={mediterraneanIcon}
							alt="Map of Mediterranean countries"
							description="Mediterranean"
						/>
					</button>
					<button onClick={() => setFilter("Desi")}>
						<Icon imagesrc={desiIcon} alt="Map of South Asian subcontinent" description="Desi" />
					</button>
					<button onClick={() => setFilter("Chinese")}>
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
								const tags = getRecipeTags(recipe).map((tag: string, i: number) => (
									<p
										key={i}
										className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
										{tag}
									</p>
								));
								return (
									<Link
										key={getRecipeId(recipe)}
										href={`/recipes/${getRecipeTitle(recipe).replace(/\s+/g, "-").toLowerCase()}`}
										className="bg-[#F5F5F5] rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
										<div>
											<ImagePreview
												src={`https://culinary-community.vercel.app/images/recipes/${getRecipePreview(
													recipe
												)}`}
												alt={getRecipeTitle(recipe)}
											/>
										</div>
										<h2 className="text-xl mt-3">{getRecipeTitle(recipe)}</h2>
										<div className="flex">{tags}</div>
										<p>{getRecipeDescription(recipe)}</p>
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
