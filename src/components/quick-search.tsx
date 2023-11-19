import React from "react";
import Image from "next/image";

export const Icon = ({ imagesrc, alt, description }: { imagesrc: string; alt: string; description: string }) => {
	return (
		<div className="flex flex-col items-center justify-between">
			<Image
				src={imagesrc}
				alt={alt}
				className="w-1/3 p-50 m-2 border-2 border-black border-solid rounded-full"
			/>
			<p>{description}</p>
		</div>
	);
};
