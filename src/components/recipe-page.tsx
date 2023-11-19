import type { Recipe } from "@/types";
import Link from "next/link";

export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
	if (!recipe) return <div>Recipe not found</div>;

	const tags = recipe.tags.map((tag, i) => (
		<p key={i} className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
			{tag}
		</p>
	));

	return (
		<div className="flex flex-col gap-5 p-5 w-[20rem]% items-start">
			<br></br>
			<br></br>
			<Link href="/recipes">← Back to all recipes</Link>
			<h2 className="flex flex-col justify-between font-normal">
				<div className="flex flex-row">
					<div className="text-3xl mr-2">{recipe.title} </div>
					<div className="text-lg text-red-500 mt-1">{recipe.likes} ♥</div>
				</div>
				<div className="flex flex-row">{tags}</div>
			</h2>
			<p>{recipe.description}</p>
			<div className="flex flex-row">
				<div className="w-40%">
					<h4 className="text-xl">Ingredients</h4>
					<ul>
						{recipe.ingredients.map((ingredient, i) => (
							<li key={i}> - {ingredient}</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-xl">Instructions</h4>
					<ol>
						{recipe.instructions.map((instruction, i) => (
							<li key={i} className="">
								{i + 1}) {instruction}
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
};
