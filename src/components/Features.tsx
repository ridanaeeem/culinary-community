import { stringify } from "querystring";
import React from "react";

// const Feature = styled.div`
//     background-color: #D7EBD6;
//     width: 25%;
// `;

const Feature = ({ title, description }: { title: string; description: string }) => {
	return (
		<div className="flex flex-col bg-[#D7EBD6] m-5 p-5 rounded-lg items-center justify-between w-1/4">
			<h3 className="text-2xl font-Inika">
				<strong>{title}</strong>
			</h3>
			<br></br>
			<p className="text-lg text-center font-Inika">{description}</p>
		</div>
	);
};

export default function Features() {
	return (
		<div className="flex flex-row">
			<Feature
				title="Inclusivity"
				description="We provide a space for individuals from diverse backgrounds to connect, share, and participate in events that celebrate the richness of different cultures and experiences"
			/>
			<Feature
				title="Community"
				description="We offer a platform where people can host and attend events, share recipes, and collaborate with those in their communities to address food insecurity issues"
			/>
			<Feature
				title="Learning"
				description="We promote continuous learning, offering free classes to help those in need, teaching new skills to the younger generation, and providing exposure to different cuisines"
			/>
			<Feature
				title="Sustainability"
				description="We promote a sustainable approach to consumption by partnering with food delivery services to minimize food waste, ensuring exact portions for events"
			/>
		</div>
	);
}
