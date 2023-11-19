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

export const RecipePreviews = ({ recipes }: { recipes: any[] }) => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit">
				{recipes.map(function (recipe: any) {
					if (!getRecipePreview(recipe)) return null;
					return (
						<Link
							key={getRecipeId(recipe)}
							href={`/recipes/${getRecipeTitle(recipe).replace(/\s+/g, "-").toLowerCase()}`}
							className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
							<ImagePreview
								src={`http://localhost:3000/images/recipes/${getRecipePreview(recipe)}`}
								alt={getRecipeTitle(recipe)}
							/>
							<h2 className="text-xl">{getRecipeTitle(recipe)}</h2>
							<p>{getRecipeDescription(recipe)}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
