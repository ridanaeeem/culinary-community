import { Logo } from "./logo";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="fixed bg-white p-5 w-full flex justify-between items-center z-30 shadow-md">
			<div>
				<Logo />
			</div>
			<div className="flex flex-row justify-around items-center w-1/3">
				<Link href="/events" className="text-3xl">
					Events
				</Link>
				<Link href="/recipes" className="text-3xl">
					Recipes
				</Link>
				<Link href="/community" className="text-3xl">
					Community
				</Link>
				<Link href="/about" className="text-3xl">
					About
				</Link>
			</div>
		</header>
	);
};
