"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ReadingForwardLogo from "./readingForwardLogo";
import NavLinks from "./NavLinks";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuSize = 20;

  return (
    <nav className="w-full sticky z-30 top-0 p-6 flex justify-between sm:justify-center align-center bg-blue-100 text-darkerBlueski border-b-zinc-800 border-b-2">
      <Link
        href="/"
        className="transition-all duration-15 hover:cursor-pointer hover:text-darkBlueski"
      >
        <ReadingForwardLogo />
      </Link>
      <ul className="hidden md:flex ml-4 self-center">
        <NavLinks mobile={false} />
      </ul>
      {/* Hamburger Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className=" p-2 bg-[#3a618e] text-white rounded-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3a618e] w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Hamburger Menu Content */}
      <div
        className={`fixed inset-x-0 top-[90px] z-[-10] bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav>
          <ul>
            <NavLinks mobile={true} />
          </ul>
        </nav>
      </div>
    </nav>
  );
}
