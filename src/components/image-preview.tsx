export const ImagePreview = ({ image }: { image: React.ReactElement }) => {
	return (
		<div className="relative w-full">
			<div className="relative item-detail">{image}</div>
		</div>
	);
};
