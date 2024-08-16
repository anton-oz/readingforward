import Link from "next/link"

export default function Nav() {

    return (
        <nav className="absolute top-0 w-full mt-2 p-2 flex justify-start align-center text-white">
            <div className="flex justify-center align-center ">
                <h1 className="text-3xl border border-cyan-50 bg-primary_dark p-2 rounded-r-lg">
                    Reading Forward
                </h1>
            </div>
            <ul className="ml-4 mb-2 self-end flex">
                <li className="flex flex-col justify-center mx-4">
                    <span className="relative after:content-[''] after:block after:w-3/4 after:left-[12.5%] after:h-[2px] after:bg-current after:absolute after:-bottom-[2px]">
                        <Link href="/" className="p-2 hover:text-blue-900 transition-all duration-150 rounded-md hover:bg-white">
                            About Me
                        </Link>
                    </span>
                </li>
                <li className="flex flex-col justify-center mx-4">
                    <span className="relative after:content-[''] after:block after:w-3/4 after:left-[12.5%] after:h-[2px] after:bg-current after:absolute after:-bottom-[2px]">
                        <Link href="/" className="p-2 hover:text-blue-900 transition-all duration-150 rounded-md hover:bg-white">
                            Contact
                        </Link>
                    </span>
                </li>
                <li className="flex flex-col justify-center mx-4">
                    <span className="relative after:content-[''] after:block after:w-3/4 after:left-[12.5%] after:h-[2px] after:bg-current after:absolute after:-bottom-[2px]">
                        <Link href="/" className="p-2 hover:text-blue-900 transition-all duration-150 rounded-md hover:bg-white">
                            Other
                        </Link>
                    </span>
                </li>
                               
            </ul>
        </nav>
    )
}