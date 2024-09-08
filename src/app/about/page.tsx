import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function AboutMe() {
  const placeholderDimensions = 250;

  return (
    <section
      id="scrollContainer"
      className="w-full h-full bg-white p-4 flex items-start justify-center"
    >
      <div className="w-full md:w-[70%] grid grid-cols-[auto,1fr]">
        <div>
          <Image
            src="https://placehold.co/250"
            height={placeholderDimensions}
            width={placeholderDimensions}
            alt="placeholder image"
            unoptimized
            className="object-contain rounded-md"
          />
          <div className="flex flex-col justify-center items-center pt-3">
            Contact:
            <Link
              href="mailto:test@example.com"
              className="flex items-center hover:underline hover:font-medium transition-all duration-200"
            >
              test@example.com
              <Mail size={25} className="pl-1" />
            </Link>
          </div>
        </div>
        <div>some stuff</div>
      </div>
    </section>
  );
}
