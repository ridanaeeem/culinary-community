import img1 from "./dumpling-making1.jpg";
import img2 from "./dumpling-making2.jpg";
import img3 from "./dumpling-making3.jpg";
import Image from "next/image";
import { Event } from "@/types";

export const DumplingMaking: Event = {
	id: "T2QcJAPG0YEybVw4=Yk&xXDSLVk5jS(1",
	title: "Dumpling Making",
	description: "Learn how to make dumplings with us!",
	date: "2021-10-10",
	time: "12:00",
	location: "Online",
	hosts: ["dumplinglovers"],
	capacity: 20,
	attendees: [
		"PizzaLover42",
		"jsmith123",
		"swiftie4ever",
		"PancakeMaster",
		"SneakerCollector",
		"HikingAdventurer",
		"stevewhite",
		"jdoe456",
		"ilovecats",
		"karenJohnson",
	],
	tags: ["dumplings", "cooking", "food", "asian"],
	preview: <Image src={img1} alt="dumpling-making" />,
	images: [
		<Image src={img1} alt="dumpling-making" />,
		<Image src={img2} alt="dumpling-making" />,
		<Image src={img3} alt="dumpling-making" />,
	],
};
