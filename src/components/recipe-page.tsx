import type { Recipe } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { getImages, getTitle, topThree } from "@/utils/getters";

export const RecipePage = ({ recipe, recipes }: { recipe: Recipe; recipes: Recipe[] }) => {
	if (!recipe) return <div>Recipe not found</div>;

	const tags = recipe.tags.map((tag, i) => (
		<p key={i} className="mr-2 px-2 my-1 text-xl rounded-full border-2 border-[#FFFFFF] bg-[#FFFFFF]">
			{tag}
		</p>
	));

	const recommended = topThree(recipe, recipes);

	return (
		<div className="flex flex-col gap-5 w-[20rem]% items-start">
			<div className="absolute w-full mx-0 brightness-50 z-n10">
				<div className="">
					<Image
						src={`https://culinary-community.vercel.app/images/recipes/${getImages(recipe)[1]}`}
						alt={getTitle(recipe)}
						width={0}
						height={0}
						sizes={"100vw"}
						// quality={100}
						style={{ width: "1440px", height: "334px" }}
					/>
				</div>
			</div>
			<div className="p-5 z-10">
				<Link href="/recipes" className="text-white">
					← Back to all recipes
				</Link>
				<h2 className="flex flex-col justify-between font-normal p-12 mb-4">
					<div className="flex flex-row">
						<div className="text-5xl mr-2 mt-1 text-white shadow-xl">{recipe.title} </div>
						<div className="text-xl text-red-400 mt-4">{recipe.likes} ♥</div>
					</div>
					<div className="flex flex-row">{tags}</div>
				</h2>
				<br></br>
				<p className="text-3xl mt-2 mb-4">{recipe.description}</p>
				<div className="flex flex-col m-auto w-full">
					<div className="flex flex-row m-auto w-full">
						<div className="bg-[#D7EBD6] px-10 py-4 mr-5 rounded-xl w-1/3">
							<h4 className="text-4xl mb-2">Ingredients</h4>
							<ul>
								{recipe.ingredients.map((ingredient, i) => (
									<li className="text-3xl" key={i}>
										{" "}
										- {ingredient}
									</li>
								))}
							</ul>
						</div>
						<div className="bg-[#F5F5F5] px-10 py-4 rounded-xl w-full">
							<h4 className="text-4xl mb-2">Instructions</h4>
							<ol>
								{recipe.instructions.map((instruction, i) => (
									<li className="text-3xl" key={i}>
										{i + 1}. {instruction}
									</li>
								))}
							</ol>
						</div>
					</div>
					<div>
						<h3 className="text-3xl m-6 text-center">You might also like...</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
