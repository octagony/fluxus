import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/">
			<div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
				<Image src="./logo.svg" alt="logo" height={30} width={30} />
				<p className="text-lg uppercase font-bold text-gray-100 pb-1">Fluxus</p>
			</div>
		</Link>
	);
}
