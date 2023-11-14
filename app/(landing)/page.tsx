import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
	return (
		<div className="flex items-center justify-center">
			<div className="flex items-center justify-center flex-col">
				<h1 className="max-w-2xl font-bold text-3xl md:text-6xl text-center text-neutral-600 mb-6">
					Go from an {""}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
						Idea
					</span>
					{""} to a {""}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
						{""} Funded Startup
					</span>
				</h1>
				<div className="max-w-xl text-center text-lg md:text-2xl">
					We&apos;ll guide you, your product and your growth to the
					entrepreneurial mountaintop!
				</div>
				<Button
					className="text-xl mt-6 rouded-xl bg-sky-600 hover:bg-sky-700"
					size="lg"
					asChild
				>
					<Link href="/sign-up">Get started now</Link>
				</Button>
			</div>
		</div>
	);
}
