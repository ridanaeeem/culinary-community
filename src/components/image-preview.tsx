// export const ImagePreview = ({ image }: { image: React.ReactElement }) => {
// 	return (
// 		<div className="relative w-full">
// 			<div className="relative item-detail">{image}</div>
// 		</div>
// 	);
// };

import Image from "next/image";

export const ImagePreview = ({ src, alt }: { src: string; alt: string }) => {
	console.log(src);
	return (
		<div className="relative w-full">
			<div className="relative item-detail">
				<Image src={src} alt={alt} width={600} height={600} style={{ objectFit: "cover" }} />
			</div>
		</div>
	);
};
