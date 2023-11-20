import React from "react";
import Link from "next/link";
import { ImagePreview } from "./image-preview";
import * as G from "@/utils/getters";

const Feature = ({ title, description }: { title: string; description: string }) => {
	return (
		<div className="flex flex-col bg-[#D7EBD6] m-5 p-5 rounded-lg items-center justify-between w-1/4">
			<h3 className="text-2xl">
				<strong>{title}</strong>
			</h3>
			<br></br>
			<p className="text-lg text-center">{description}</p>
		</div>
	);
};

export const Featured = ({ recipes }: { recipes: any[] }) => {
	return (
		<div>
			<h3 className="text-3xl m-6 text-center text-[#156E0E]">Featured Recipes and Events</h3>
			<div className="flex flex-row justify-center">
				{recipes
					.filter((recipe) => G.getLikes(recipe) > 10)
					.map((recipe) => {
						let title = G.getTitle(recipe);
						let preview = G.getPreview(recipe);
						const tags = G.getTags(recipe).map((tag: string, i: number) => (
							<p
								key={i}
								className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
								{tag}
							</p>
						));
						let description = G.getDescription(recipe);
						let imagepreview;
						try {
							imagepreview = (
								<ImagePreview
									src={`https://culinary-community.vercel.app/images/recipes/${preview}`}
									alt={G.getTitle(recipe)}
								/>
							);
						} catch (error) {
							console.error("Error fetching data:", error);
						}
						return (
							<>
								<div className="flex flex-row">
									<Link
										href={`/recipes/${title.replace(/\s+/g, "-").toLowerCase()}`}
										className="bg-[#F5F5F5] rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
										<div>{imagepreview}</div>
										<h2 className="text-xl mt-3">{title}</h2>
										<div className="flex flex-wrap">{tags}</div>
										<p>{description}</p>
									</Link>
								</div>
							</>
						);
					})}
			</div>
		</div>
	);
};
