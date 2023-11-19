import Link from "next/link";
import { ImagePreview } from "./image-preview";

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

export const RecipePreviews = ({ recipes }: { recipes: any[] }) => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit mx-10">
				{recipes.map(function (recipe: any) {
					if (!recipe) {
						return null;
					}
					const tags = getRecipeTags(recipe).map((tag: string, i: number) => (
						<p key={i} className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
							{tag}
						</p>
					));
					return (
						<Link
							key={getRecipeId(recipe)}
							href={`/recipes/${getRecipeTitle(recipe).replace(/\s+/g, "-").toLowerCase()}`}
							className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
							<div>
								<ImagePreview src={getRecipePreview(recipe)} alt={getRecipeTitle(recipe)/>
							</div>
							<h2 className="text-xl mt-3">{getRecipeTitle(recipe)}</h2>
							<p>{getRecipeDescription(recipe)}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
