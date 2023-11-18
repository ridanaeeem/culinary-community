import { Koshari } from "./recipes/koshari";
import { ScallionPancake } from "./recipes/scallion-pancake";
import { ShrimpScampi } from "./recipes/shrimp-scampi";

import { Recipe } from "@/types";

export const Recipes: Recipe[] = [Koshari, ScallionPancake, ShrimpScampi];

export const RecipesByTitle: { [name: string]: Recipe } = {};
for (const recipe of Recipes) {
	RecipesByTitle[recipe.title.replace(/\s+/g, "-").toLowerCase()] = recipe;
}
export const RecipesById: { [key: string]: Recipe } = {};
for (const recipe of Recipes) {
	RecipesById[recipe.id] = recipe;
}
