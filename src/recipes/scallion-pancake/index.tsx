import img1 from "./scallion-pancake1.jpg";
import img2 from "./scallion-pancake2.jpg";
import img3 from "./scallion-pancake3.webp";
import Image from "next/image";
import { Recipe } from "@/types";

export const ScallionPancake: Recipe = {
	id: "?-)&932#]_/=&L6A,m}p&%,+YfWR/AR4",
	title: "Scallion Pancake",
	description: "A traditional Chinese dish made with flour, scallions, and oil.",
	ingredients: ["2 cups flour", "1 cup water", "1 cup scallions", "1 tsp salt", "1 tsp pepper", "1 tsp olive oil"],
	instructions: [
		"Combine the flour, water, salt, and pepper in a bowl and mix until smooth.",
		"Chop the scallions and mix into the batter.",
		"Heat the oil in a pan over medium heat.",
		"Pour the batter into the pan and cook for 5 minutes on each side.",
	],
	tags: ["Chinese", "Vegan"],
	preview: <Image src={img1} alt="Scallion Pancake" />,
	images: [
		<Image key={1} src={img1} alt="Scallion Pancake" />,
		<Image key={2} src={img2} alt="Scallion Pancake" />,
		<Image key={3} src={img3} alt="Scallion Pancake" />,
	],
};
