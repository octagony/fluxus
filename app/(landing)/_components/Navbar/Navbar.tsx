import Logo from "@/components/Logo/Logo";

export const Navbar = () => {
  return (
    <div className="fixed z-10 top-0 w-full py-2 px-4 shadow-sm backdrop-blur-sm bg-sky-100/5 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
      </div>
    </div>
  );
};
