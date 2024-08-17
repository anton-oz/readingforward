import Link from "next/link"
import { ReadingForwardLogo } from "./readingForwardLogo";
import NavLinks from "./NavLinks";

export default function Nav() {
    
    return (
        <nav className="absolute top-0 w-full p-3 flex justify-start align-center text-white">
                <Link href="/" className="transition-all duration-150 hover:text-blueski hover:cursor-pointer">
                    <ReadingForwardLogo animation={true}/>
                </Link>
            <ul className="ml-4 self-center flex">
                <NavLinks />       
            </ul>
        </nav>
    )
}