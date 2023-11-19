import React from "react";
import Link from "next/link";
import { ImagePreview } from "./image-preview";

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

function getRecipeLikes(recipe: any) {
	return recipe.likes ? recipe.likes : 0;
}

const Feature = ({ title, description }: { title: string; description: string }) => {
	return (
		<div className="flex flex-col bg-[#D7EBD6] m-5 p-5 rounded-lg items-center justify-between w-1/4">
			<h3 className="text-2xl">
				<strong>{title}</strong>
			</h3>
			<br></br>
			<p className="text-lg text-center">{description}</p>
		</div>
	);
};

export const Featured = ({ recipes }: { recipes: any[] }) => {
	return (
		<div>
			<h3 className="text-3xl m-6 text-center text-[#156E0E]">Featured Recipes and Events</h3>
			<div className="flex flex-row justify-center">
				{recipes
					.filter((recipe) => getRecipeLikes(recipe) > 10)
					.map((recipe) => {
						let title = getRecipeTitle(recipe);
						let preview = getRecipePreview(recipe);
						let tags = getRecipeTags(recipe);
						let description = getRecipeDescription(recipe);
						let imagepreview;
						try {
							imagepreview = (
								<ImagePreview
									src={`https://culinary-community.vercel.app/images/recipes/${preview}`}
									alt={getRecipeTitle(recipe)}
								/>
							);
						} catch (error) {
							console.error("Error fetching data:", error);
						}
						return (
							<>
								<div className="flex flex-row">
									<Link
										href={`/recipes/${title.replace(/\s+/g, "-").toLowerCase()}`}
										className="bg-[#F5F5F5] rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
										<div>{imagepreview}</div>
										<h2 className="text-xl mt-3">{title}</h2>
										<div className="flex flex-row">{tags}</div>
										<p>{description}</p>
									</Link>
								</div>
							</>
						);
					})}
			</div>
		</div>
	);
};
