import clientPromise from "@/lib/mongodb";

export const FetchEvents = async ({ req, res }: { req: any; res: any }) => {
	try {
		const client = await clientPromise;
		const db = client.db("CCDatabase");

		const movies = await db.collection("Events").find({}).toArray();

		// const movies = await db.collection("Events").find({}).sort({ metacritic: -1 }).limit(10).toArray();

		res.json(movies);
	} catch (e) {
		console.error(e);
	}
};
