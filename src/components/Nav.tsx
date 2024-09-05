import Link from "next/link";
import { ReadingForwardLogo } from "./readingForwardLogo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className="w-full top-0 p-6 flex justify-center align-center bg-slate-100 border-b-slate-300 border-b-[2px]">
      <Link
        href="/"
        className="transition-all duration-15 hover:cursor-pointer hover:text-darkBlueski"
      >
        <ReadingForwardLogo animation={true} />
      </Link>
      <ul className="ml-4 self-center flex">
        <NavLinks />
      </ul>
    </nav>
  );
}
