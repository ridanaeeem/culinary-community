export const Tags = ({ tags }: { tags: string[] }) => {
	return (
		<ul className="flex flex-wrap">
			{tags.map((tag, i) => (
				<li key={i} className="mr-2 px-2 my-1 text-m rounded-full border-2 border-[#D7EBD6] bg-[#D7EBD6]">
					{tag}
				</li>
			))}
		</ul>
	);
};
