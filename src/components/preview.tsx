import Link from "next/link";
import { ImagePreview } from "./image-preview";
import { Recipe, Event } from "@/types";

export const Previews = ({ objects }: { objects: (Recipe | Event)[] }) => {
	const url = `https://culinary-community.vercel.app/images`;
	return (
		<div className="flex flex-wrap justify-center w-fit mx-10">
			{objects.map((object) => {
				const tags = object.tags.map((tag, i) => (
					<li key={i} className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
						{tag}
					</li>
				));
				return (
					<Link
						key={object._id}
						href={`/${object.dir}/${object.title.replace(/\s+/g, "-").toLowerCase()}`}
						className="bg-[#F5F5F5] rounded-lg flex flex-col p-4 m-2 w-60 min-w-10vw hover:shadow-2xl hover:outline-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104">
						<div>
							<ImagePreview src={`${url}/${object.dir}/${object.preview}`} alt={object.title} />
						</div>
						<h2 className="text-xl mt-3">{object.title}</h2>
						<ul className="flex flex-wrap">{tags}</ul>
						<p>{object.description}</p>
					</Link>
				);
			})}
		</div>
	);
};
