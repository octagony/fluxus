import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
        <Image
          className="bg-cover bg-center"
          src="/hero.jpg"
          fill={true}
          alt="Hero image"
          objectFit="cover"
        />
      <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="max-w-2xl font-bold text-3xl md:text-6xl text-center text-white mb-6 drop-shadow-2xl">
          Go from an {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-500">
            Idea
          </span>
          {""} to a {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-400">
            {""} Funded Startup
          </span>
        </h1>
        <div className="max-w-xl text-center text-lg md:text-2xl text-gray-100 drop-shadow-2xl">
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
