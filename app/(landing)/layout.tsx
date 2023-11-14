import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar/Navbar";
import { Footer } from "./_components/Footer/Footer";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
