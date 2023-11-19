import Image from "next/image";

import { Koshari } from "./recipes/koshari";
import { ScallionPancake } from "./recipes/scallion-pancake";
import { ShrimpScampi } from "./recipes/shrimp-scampi";

import { Event, Recipe } from "@/types";

// list of recipes and lookup tables
export const Recipes: Recipe[] = [Koshari, ScallionPancake, ShrimpScampi];

export const RecipesByTitle: { [name: string]: Recipe } = {};
for (const recipe of Recipes) {
	RecipesByTitle[recipe.title.replace(/\s+/g, "-").toLowerCase()] = recipe;
}
export const RecipesById: { [key: string]: Recipe } = {};
for (const recipe of Recipes) {
	RecipesById[recipe.id] = recipe;
}

// let Events: any[] = [];
// export const EventsByTitle: { [name: string]: any } = {};
// export const EventsById: { [key: string]: any } = {};
// const axios = require("axios");
// try {
// 	const response = axios.get("http://localhost:3000/api/events"); // replace with deployment endpoint
// 	const data = response.data;
// 	if (!(data instanceof Array)) {
// 		console.log("ERROR GETTING DATA!!!!!!!!!!!!!!!!");
// 		throw new Error("Response data is not an array");
// 	}
// 	Events = data;
// } catch (error) {
// 	console.error(error);
// }
// for (const event of Events) {
// 	EventsByTitle[event.title.replace(/\s+/g, "-").toLowerCase()] = event;
// }
// for (const event of Events) {
// 	EventsById[event._id] = event;
// }

const axios = require("axios");

export const EventsByTitle = () => {
	try {
		const response = axios.get("http://localhost:3000/api/events"); // replace with deployment endpoint
		const data = response.data;
		console.log("data: ", data);
		const EventsByTitle: { [name: string]: Event } = {};
		for (const event of data) {
			EventsByTitle[event.title.replace(/\s+/g, "-").toLowerCase()] = event;
		}
		return EventsByTitle;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
