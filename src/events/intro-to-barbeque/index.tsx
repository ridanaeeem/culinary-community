import img1 from "./intro-to-barbeque1.webp";
import img2 from "./intro-to-barbeque2.webp";
import img3 from "./intro-to-barbeque3.jpg";
import Image from "next/image";
import { Event } from "@/types";

export const IntroToBarbeque: Event = {
	id: "X@HH@hfnXw{!WRXb&0=HYbV{ey4R#&Jn",
	title: "Intro to Barbeque",
	description: "Learn how to barbeque like a pro!",
	date: "2023-08-16",
	time: "10:00",
	location: "69 Scott Steet",
	hosts: ["grillmaster78"],
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
	tags: ["barbeque", "food", "cooking", "grilling"],
	preview: <Image src={img1} alt="barbequing" />,
	images: [
		<Image key={1} src={img1} alt="barbequing" />,
		<Image key={2} src={img2} alt="barbequing" />,
		<Image key={3} src={img3} alt="barbequing" />,
	],
};
