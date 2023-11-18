import type { Recipe } from "@/types";

export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
	if (!recipe) return <div>Recipe not found</div>;

	return (
		<div className="flex flex-col gap-5 p-5 w-[20rem]% items-start">
			<h2 className="flex flex-col justify-between text-3xl font-normal">{recipe.title}</h2>
			<h4 className="text-lg">Tags</h4>
			<ul className="flex flex-row">
				{recipe.tags.map((tag) => (
					<li className="mx-1 p-2 border-solid border-2 border-black">{tag}</li>
				))}
			</ul>
			<p>{recipe.description}</p>
			<h4 className="text-xl">Ingredients</h4>
			<ul>
				{recipe.ingredients.map((ingredient) => (
					<li>{ingredient}</li>
				))}
			</ul>
			<h4 className="text-xl">Instructions</h4>
			<ol>
				{recipe.instructions.map((instruction) => (
					<li className="py-2">{instruction}</li>
				))}
			</ol>
		</div>
	);
};
