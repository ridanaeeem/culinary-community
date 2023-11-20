import { Previews } from "./preview";
import { Recipe, Event } from "@/types";

export const Recommended = ({ recs }: { recs: (Recipe | Event)[] }) => {
	return (
		<div className="flex flex-col w-full">
			<h3 className="text-3xl m-6 text-center">You might also like...</h3>
			<div className="flex w-full justify-center">
				<Previews objects={recs} />
			</div>
		</div>
	);
};
