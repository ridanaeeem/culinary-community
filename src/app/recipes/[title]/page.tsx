import React from "react";
import { RecipePage } from "@/components/recipe-page";
import { Header } from "@/components/header";
import { getTitle } from "@/utils/getters";

const axios = require("axios");

export default async function ViewEvent({ params }: { params: { title: string } }) {
	try {
		console.log(params);
		const response = await axios.get("https://culinary-community.vercel.app/api/recipes"); // replace with deployment endpoint
		const data = response.data;
		if (!(data instanceof Array)) {
			throw new Error("Response data is not an array");
		}
		const recipe = data.filter(
			(recipe: any) => getTitle(recipe).replace(/\s+/g, "-").toLowerCase() === params.title
		);
		return (
			<>
				<Header />
				<RecipePage recipe={recipe[0]} />
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}
