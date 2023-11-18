import img1 from "./koshari1.jpg";
import img2 from "./koshari2.jpg";
import img3 from "./koshari3.jpg";
import Image from "next/image";
import { Recipe } from "@/types";

export const Koshari: Recipe = {
	id: "MqxhUva;;rrSuLeC)yj/FmDmq?t_V)z!",
	title: "Koshari",
	description: "A traditional Egyptian dish made with rice, lentils, chickpeas, macaroni, and tomato sauce.",
	ingredients: [
		"1 cup lentils",
		"1 cup rice",
		"1 cup macaroni",
		"1 cup chickpeas",
		"1 cup tomato sauce",
		"1 onion",
		"2 cloves garlic",
		"1 tsp cumin",
		"1 tsp coriander",
		"1 tsp salt",
		"1 tsp pepper",
		"1 tsp olive oil",
	],
	instructions: [
		"Cook the lentils, rice, macaroni, and chickpeas in separate pots.",
		"Dice the onion and garlic and saute in a pan with the olive oil.",
		"Add the tomato sauce, cumin, coriander, salt, and pepper to the pan and cook for 5 minutes.",
		"Combine the lentils, rice, macaroni, and chickpeas in a large bowl and mix in the sauce.",
	],
	tags: ["Egyptian", "Vegan"],
	images: [
		<Image src={img1} alt="Koshari" />,
		<Image src={img2} alt="Koshari" />,
		<Image src={img3} alt="Koshari" />,
	],
};
