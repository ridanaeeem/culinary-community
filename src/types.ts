import { MongoClient } from "mongodb";

declare global {
	var _mongoClientPromise: Promise<MongoClient>;
}

export interface ResponseFuncs {
	GET?: Function;
	POST?: Function;
	PUT?: Function;
	DELETE?: Function;
}

export interface Event {
	_id: string;
	title: string;
	description: string;
	price: number;
	date: string;
	time: string;
	location: string;
	hosts: string[];
	capacity: number;
	attendees: string[];
	tags: string[];
	preview: string;
	images: string[];
	dir: string;
}

export type User = {
	id: string;
	username: string;
	email: string;
	password: string;
	events: string[];
};

export interface Recipe {
	_id: string;
	title: string;
	author: string;
	likes: number;
	description: string;
	ingredients: string[];
	instructions: string[];
	tags: string[];
	preview: string;
	images: string[];
	dir: string;
}
