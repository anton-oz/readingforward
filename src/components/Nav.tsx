import Link from "next/link"
import { ReadingForwardLogo } from "./readingForwardLogo";
import NavLinks from "./NavLinks";

export default function Nav() {
    
    return (
        <nav className="absolute top-0 w-full pt-[3em] flex justify-center align-center">
                <Link href="/" className="transition-all duration-15 hover:cursor-pointer hover:text-darkBlueski">
                    <ReadingForwardLogo animation={true}/>
                </Link>
            <ul className="ml-4 self-center flex">
                <NavLinks />       
            </ul>
        </nav>
    )
}