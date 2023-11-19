import type { Recipe } from "@/types";
import { Recipes } from "@/data";
import Link from "next/link";
import { ImagePreview } from "./image-preview";

export const RecipePreviews = () => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit mx-10">
				{Recipes.map(function (recipe: Recipe) {
					const { id, title, description, preview } = recipe;
					return (
						<Link
							key={id}
							href={`/recipes/${title.replace(/\s+/g, "-").toLowerCase()}`}
							className="bg-[#F5F5F5] rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
							<ImagePreview image={preview} />
							<h2 className="text-xl my-3">{title}</h2>
							<p>{description}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
