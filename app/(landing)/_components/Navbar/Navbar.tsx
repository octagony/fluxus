import Logo from "@/components/Logo/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed z-10 top-0 w-full py-2 px-4 shadow-sm backdrop-blur-sm bg-sky-100/5 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button className="text-sky-500" size="sm" variant="link" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button
            className="bg-sky-600 hover:bg-sky-700"
            size="sm"
            variant="default"
            asChild
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
