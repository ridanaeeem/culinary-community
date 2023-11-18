import React, { FC } from "react";
import { RecipesByTitle } from "@/data";
import { RecipePage } from "@/components/recipe-page";
import { Header } from "@/components/header";

interface pageProps {
	params: { title: string };
}

const ViewRecipe: FC<pageProps> = ({ params }) => {
	const recipe = RecipesByTitle[params.title];
	return (
		<>
			<Header />
			<RecipePage recipe={recipe} />
		</>
	);
};

export default ViewRecipe;
