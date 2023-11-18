import img1 from "./shrimp-scampi1.jpg";
import img2 from "./shrimp-scampi2.jpg";
import img3 from "./shrimp-scampi3.jpg";
import Image from "next/image";
import { Recipe } from "@/types";

export const Koshari: Recipe = {
	id: "7qZ80jaP$1AWK08;AerC!cW}d.KU.&e@",
	title: "Shrimp Scampi",
	description: "A traditional Italian dish made with shrimp, garlic, and butter.",
	ingredients: [
		"1 lb small shrimp",
		"1 lb angel hair pasta",
		"1 cup butter",
		"1 cup garlic",
		"1 tsp salt",
		"1 tsp pepper",
	],
	instructions: [
		"Cook the pasta in a pot of boiling water.",
		"Melt the butter in a pan over medium heat.",
		"Add the shrimp and garlic to the pan and cook for 5 minutes.",
		"Combine the pasta and shrimp in a bowl and serve.",
	],
	tags: ["Italian"],
	images: [
		<Image src={img1} alt="Shrimp Scampi" />,
		<Image src={img2} alt="Shrimp Scampi" />,
		<Image src={img3} alt="Shrimp Scampi" />,
	],
};
