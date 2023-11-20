export const getId = (x: any) => {
	return x.hasOwnProperty("_id") ? x._id : `[ID]`;
};

export const getTitle = (x: any) => {
	return x.hasOwnProperty("title") ? x.title : `[TITLE]`;
};

export const getDescription = (x: any) => {
	return x.hasOwnProperty("description") ? x.description : `[DESCRIPTION]`;
};

export const getPreview = (x: any) => {
	return x.hasOwnProperty("preview") ? x.preview : null;
};

export const getPrice = (x: any) => {
	return x.hasOwnProperty("price") ? x.price : Infinity;
};

export const getTags = (x: any) => {
	return x.hasOwnProperty("tags") ? x.tags : [`[TAGS]`];
};

export const getDate = (x: any) => {
	return x.hasOwnProperty("date") ? x.date : `[DATE]`;
};

export const getImages = (x: any) => {
	return x.hasOwnProperty("images") ? x.images : [`[IMAGES]`];
};

export const getLocation = (x: any) => {
	return x.hasOwnProperty("location") ? x.location : `[LOCATION]`;
};

export const getHosts = (x: any) => {
	return x.hasOwnProperty("hosts") ? x.hosts : [`[HOSTS]`];
};

export const getAttendees = (x: any) => {
	return x.hasOwnProperty("attendees") ? x.attendees : [`[ATTENDEES]`];
};

export const getCapacity = (x: any) => {
	return x.hasOwnProperty("capacity") ? x.capacity : 1;
};

export const getLikes = (x: any) => {
	return x.hasOwnProperty("likes") ? x.likes : 0;
};

export const numSimilarTags = (x: any, y: any) => {
	return getTags(x).filter((tag: string) => getTags(y).includes(tag)).length;
};

export const topThree = (x: any, y: any[]) => {
	const sortedRecipes = y
		.filter((z) => getTitle(z) !== getTitle(x))
		.sort((a, b) => numSimilarTags(b, x) - numSimilarTags(a, x));
	return sortedRecipes.slice(0, 3);
};
