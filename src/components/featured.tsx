import React from "react";
import { Previews } from "./preview";
import { Recipe, Event } from "@/types";

const minLikes = 10;
const minAttendeePercentage = 0.6;
const cap = 3;

export const Featured = ({ recipes, events }: { recipes: Recipe[]; events: Event[] }) => {
	recipes = recipes.filter((recipe) => recipe.likes > minLikes);
	events = events.filter((event) => {
		const per = event.attendees.length / event.capacity;
		return per > minAttendeePercentage && per < 1;
	});
	const featured = [...recipes, ...events].sort(() => Math.random() - 0.5).slice(0, cap);
	return (
		<div>
			<h3 className="text-3xl m-6 text-center text-[#156E0E]">Featured Recipes and Events</h3>
			<div className="flex flex-row justify-center">
				<Previews objects={featured} />
			</div>
		</div>
	);
};
