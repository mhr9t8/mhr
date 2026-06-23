import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed z-10 bg-background top-0 w-full rounded-b-xl  shadow-[0_0_40px_#001733]">
      <nav className="max-w-7xl mx-auto py-6 sm:px-6 px-6 flex justify-between items-center">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
