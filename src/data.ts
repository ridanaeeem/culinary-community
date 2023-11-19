// import { DumplingMaking } from "./events/dumpling-making";
// import { HolidayCookieWorkshop } from "./events/holiday-cookie-workshop";
// import { IntroToBarbeque } from "./events/intro-to-barbeque";
import Image from "next/image";

import { Koshari } from "./recipes/koshari";
import { ScallionPancake } from "./recipes/scallion-pancake";
import { ShrimpScampi } from "./recipes/shrimp-scampi";

import { Event, Recipe } from "@/types";

import { FetchEvents } from "./events/events";

const clientPromise = require("@/lib/mongodb");

// export const Events: Event[] = [];
const test = async ({ req, res }: { req: any; res: any }) => {
	try {
		const client = await clientPromise;
		const db = client.db("CCDatabase");

		const fetch = await db.collection("Events").find({}).toArray();

		// convert fetch to an array of Events
		const events: Event[] = [];

		fetch.map((event: Event) => {
			try {
				events.push({
					_id: event._id,
					title: event.title,
					description: event.description,
					price: event.price,
					date: event.date,
					time: event.date,
					location: event.location,
					hosts: event.hosts,
					capacity: event.capacity,
					attendees: event.attendees,
					tags: event.tags,
					preview: event.preview,
					images: event.images,
				});
			} catch (e) {
				console.error(e);
			}
		});
		return events;
	} catch (e) {
		console.error(e);
		return null;
	}
};

// list of events and lookup tables
export const Events: Event[] | null = await test({ req: null, res: null });

export const EventsByTitle: { [name: string]: Event } = {};
export const EventsById: { [key: string]: Event } = {};
if (Events) {
	for (const event of Events) {
		EventsByTitle[event.title.replace(/\s+/g, "-").toLowerCase()] = event;
	}
	for (const event of Events) {
		EventsById[event.id] = event;
	}
}
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
