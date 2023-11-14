import  Footer  from "@/components/Footer/Footer";
import  Navbar  from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
