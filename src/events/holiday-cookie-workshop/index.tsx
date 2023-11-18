import img1 from "./holiday-cookie-workshop1.jpg";
import img2 from "./holiday-cookie-workshop2.webp";
import img3 from "./holiday-cookie-workshop3.jpg";
import Image from "next/image";
import { Event } from "@/types";

export const HolidayCookieWorkshop: Event = {
	id: "n_$9GdRaf%QKc}uP?i7AV_36XT6AGzet",
	title: "Holiday Cookie Workshop",
	description: "Come bake and decorate holiday cookies with us!",
	price: 0,
	date: "2021-12-18",
	time: "8:00",
	location: "100 Bay State Road",
	hosts: ["christmas-caroler"],
	capacity: 30,
	attendees: [
		"balloonanimallover",
		"kittykat123",
		"swiftie4ever",
		"PancakeMaster",
		"programmer89",
		"HikingAdventurer",
		"stevewhite",
		"jdoe456",
		"ilovedogs",
		"karenJohnson",
		"ribadadoobie",
		"ham-man",
		"rabberducky",
	],
	tags: ["cookies", "baking", "food", "holiday"],
	preview: <Image src={img1} alt="holiday cookie workshop" />,
	images: [
		<Image key={1} src={img1} alt="holiday cookie workshop" />,
		<Image key={2} src={img2} alt="holiday cookie workshop" />,
		<Image key={3} src={img3} alt="holiday cookie workshop" />,
	],
};
