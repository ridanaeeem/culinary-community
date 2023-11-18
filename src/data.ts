import { DumplingMaking } from "./events/dumpling-making";
import { HolidayCookieWorkshop } from "./events/holiday-cookie-workshop";
import { IntroToBarbeque } from "./events/intro-to-barbeque";

import { Koshari } from "./recipes/koshari";
import { ScallionPancake } from "./recipes/scallion-pancake";
import { ShrimpScampi } from "./recipes/shrimp-scampi";

import { Event, Recipe } from "@/types";

// list of events and lookup tables
export const Events: Event[] = [DumplingMaking, HolidayCookieWorkshop, IntroToBarbeque];

export const EventsByTitle: { [name: string]: Event } = {};
for (const event of Events) {
	EventsByTitle[event.title.replace(/\s+/g, "-").toLowerCase()] = event;
}
export const EventsById: { [key: string]: Event } = {};
for (const event of Events) {
	EventsById[event.id] = event;
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
