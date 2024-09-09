"use client";
import Image from "next/image";

export default function Marquee({ items }: { items: string[] }) {
  const dimensions = 475;
  return (
    <div className="flex-shrink-0 relative  h-full">
      <div className="animate-marquee whitespace-nowrap py-12 flex w-full h-full">
        {items.map((item, i) => {
          return (
            //   <span key={item} className="mx-4 text-4xl">
            //     {item}
            //   </span>
            <Image
              key={i}
              src={item}
              width={dimensions}
              height={dimensions}
              alt="placeholder image"
              unoptimized={true}
              className="object-contain"
            />
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex w-full h-full">
        {items.map((item, i) => {
          return (
            // <span key={item} className="mx-4 text-4xl">
            //   {item}
            // </span>
            <Image
              key={i}
              src={item}
              width={dimensions}
              height={dimensions}
              alt="placeholder image"
              unoptimized={true}
              className="object-contain"
            />
          );
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
