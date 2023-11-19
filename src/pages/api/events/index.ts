import { NextApiRequest, NextApiResponse } from "next";
import { eventConnect } from "@/utils/connection";
import { ResponseFuncs } from "@/types";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	//capture request method, we type it as a key of ResponseFunc to reduce typing later
	const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

	//function for catch errors
	const catcher = (error: any) => res.status(400).json({ error });

	// Potential Responses
	const handleCase: ResponseFuncs = {
		// RESPONSE FOR GET REQUESTS
		GET: async (req: NextApiRequest, res: NextApiResponse) => {
			eventConnect()
				.then(({ Events }) => Events.find({}))
				.then((events) => res.json(events))
				.catch(catcher);
		},
		// RESPONSE POST REQUESTS
		POST: async (req: NextApiRequest, res: NextApiResponse) => {
			eventConnect()
				.then(({ Events }) => Events.create(req.body))
				.then((result) => res.json(result))
				.catch(catcher);
		},
	};

	// Check if there is a response for the particular method, if so invoke it, if not response with an error
	const response = handleCase[method];
	if (response) {
		response(req, res);
	} else {
		res.status(400).json({ error: "No Response for This Request" });
	}
};

export default handler;
