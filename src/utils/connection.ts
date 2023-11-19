//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";

const DATABASE_URL = process.env.MONGODB_URL;

// connection function
export const connect = async () => {
	const conn = await mongoose.connect(DATABASE_URL as string).catch((err) => console.log(err));
	console.log("Mongoose Successfully Connected");

	// Event SCHEMA
	const EventSchema = new mongoose.Schema({
		_id: String,
		title: String,
		description: String,
		price: Number,
		date: String,
		time: String,
		location: String,
		hosts: Array<String>,
		capacity: Number,
		attendees: Array<String>,
		tags: Array<String>,
		preview: String,
		images: Array<String>,
	});

	// Event MODEL
	const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

	return { conn, Event };
};
