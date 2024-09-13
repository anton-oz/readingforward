"use client";
import { animate } from "motion";
import Image from "next/image";

export default function ReadingForwardLogo() {
  return (
    <div
      id="readingForwardLogo"
      className="flex justify-center align-center"
      onMouseEnter={() => {
        animate(
          "#logoImage",
          { transform: "translateX(500%)" },
          { duration: 0.5 }
        );
        animate(
          "#logoName",
          { transform: "translateX(-23%)" },
          { duration: 0.5 }
        );
      }}
      onMouseLeave={() => {
        animate(
          "#logoImage",
          { transform: "translateX(0)" },
          { duration: 0.5 }
        );
        animate("#logoName", { transform: "translateX(0)" }, { duration: 0.5 });
      }}
    >
      <Image
        priority={true}
        id="logoImage"
        src="/readingforward.svg"
        width={40}
        height={40}
        className="mx-[0.4em] text-blueski"
        alt="Reading Forward logo"
      />
      <b id="logoName" className="text-2xl grid items-center">
        Reading Forward
      </b>
    </div>
  );
}
