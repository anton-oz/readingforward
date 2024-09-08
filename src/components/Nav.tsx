import Link from "next/link";
import ReadingForwardLogo from "./readingForwardLogo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className="w-full sticky z-30 top-0 p-6 flex justify-center align-center bg-blue-100 text-darkerBlueski border-b-zinc-800 border-b-2">
      <Link
        href="/"
        className="transition-all duration-15 hover:cursor-pointer hover:text-darkBlueski"
      >
        <ReadingForwardLogo />
      </Link>
      <ul className="hidden md:flex ml-4 self-center">
        <NavLinks />
      </ul>
    </nav>
  );
}
