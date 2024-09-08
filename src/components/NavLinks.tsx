"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  let pathname = usePathname();

  const links = ["About", "FAQ", "Contact", "Other"];

  return (
    <>
      {links.map((link, i) => (
        <li key={i} className="flex flex-col justify-center mx-4">
          {pathname === `/${link.toLocaleLowerCase()}` ? (
            <span className="relative after:content-[''] after:block after:w-3/4 after:left-[12.5%] after:h-[2px] after:bg-current after:absolute after:-bottom-[2px]">
              <Link
                href={`/${link.toLocaleLowerCase()}`}
                className="p-2 transition-all duration-150 rounded-md hover:bg-blueski hover:text-white"
              >
                {link}
              </Link>
            </span>
          ) : (
            <Link
              href={`/${link.toLocaleLowerCase()}`}
              className="p-2  transition-all duration-150 rounded-md  hover:bg-darkBlueski hover:text-white"
            >
              {link}
            </Link>
          )}
        </li>
      ))}
    </>
  );
}
