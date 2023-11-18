import React from "react";
import { MongoClient } from "mongodb";

declare global {
	var _mongoClientPromise: Promise<MongoClient>;
}

export type Event = {
	id: string;
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
	preview: React.ReactElement;
	images: React.ReactElement[];
};

export type User = {
	id: string;
	username: string;
	email: string;
	password: string;
	events: string[];
};

export type EventProps = {
	event: Event;
};

export type UserProps = {
	user: User;
};

export type Recipe = {
	id: string;
	title: string;
	author: string;
	likes: number;
	description: string;
	ingredients: string[];
	instructions: string[];
	tags: string[];
	preview: React.ReactElement;
	images: React.ReactElement[];
};
