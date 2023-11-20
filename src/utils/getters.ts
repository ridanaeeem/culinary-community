export const getId = (x: any) => {
	return x.id ? x.id : `[ID]`;
};

export const getTitle = (x: any) => {
	return x.title ? x.title : `[TITLE]`;
};

export const getDescription = (x: any) => {
	return x.description ? x.description : `[DESCRIPTION]`;
};

export const getPreview = (x: any) => {
	return x.preview ? x.preview : null;
};

export const getPrice = (x: any) => {
	return x.price ? x.price : Infinity;
};

export const getTags = (x: any) => {
	return x.tags ? x.tags : [`[TAGS]`];
};

export const getDate = (x: any) => {
	return x.date ? x.date : `[DATE]`;
};

export const getImages = (x: any) => {
	return x.images ? x.images : [`[IMAGES]`];
};

export const getLocation = (x: any) => {
	return x.location ? x.location : `[LOCATION]`;
};

export const getHosts = (x: any) => {
	return x.hosts ? x.hosts : [`[HOSTS]`];
};

export const getAttendees = (x: any) => {
	return x.attendees ? x.attendees : [`[ATTENDEES]`];
};

export const getCapacity = (x: any) => {
	return x.capacity ? x.capacity : `[CAPACITY]`;
};

export const getLikes = (x: any) => {
	return x.likes ? x.likes : 0;
};
