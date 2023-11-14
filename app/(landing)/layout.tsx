import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar/Navbar";

export default function LandingLayout({ children }: { children: ReactNode }) {
	return (
		<div className="h-full bg-slate-100">
			<Navbar />
			<main className="pb-20 bg-slate-100">{children}</main>
		</div>
	);
}
