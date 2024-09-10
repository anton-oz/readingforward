"use client";
import Image from "next/image";

export default function Marquee({ items }: { items: string[] }) {
  const dimensions = 450;
  return (
    <div className="flex-shrink-0 relative h-full">
      <div className="animate-marquee whitespace-nowrap flex w-full h-full">
        {items.map((item, i) => {
          return (
            <img
              key={i}
              src={item}
              alt="placeholder image"
              className="object-contain max-h-[450px] w-full"
            />
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex w-full h-full">
        {items.map((item, i) => {
          return (
            <img
              key={i}
              src={item}
              alt="placeholder image"
              className="object-contain max-h-[450px] w-full"
            />
          );
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
