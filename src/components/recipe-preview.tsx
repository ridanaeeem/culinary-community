import type { Recipe } from "@/types";
import { Recipes } from "@/data";
import Link from "next/link";

const ImagePreview = ({ image }: { image: React.ReactElement }) => {
	return (
		<div className="relative w-full">
			<div className="relative item-detail">{image}</div>
		</div>
	);
};

export const RecipePreviews = () => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-wrap justify-center w-fit">
				{Recipes.map(function (recipe: Recipe) {
					const { id, title, description, preview } = recipe;
					return (
						<Link
							key={id}
							href={`/recipes/${title.replace(/\s+/g, "-").toLowerCase()}`}
							className="bg-white rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
							<ImagePreview image={preview} />
							<h2 className="text-xl">{title}</h2>
							<p>{description}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
