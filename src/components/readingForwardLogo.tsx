"use client";
import { animate } from "motion";
import { FC } from "react";
import Image from "next/image";

type props = {
  animation: boolean;
};

export const ReadingForwardLogo: FC<props> = ({ animation }) => {
  const dev = process.env.NEXT_PUBLIC_DEV === "1";

  if (animation) {
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
          animate(
            "#logoName",
            { transform: "translateX(0)" },
            { duration: 0.5 }
          );
        }}
      >
        <Image
          priority={true}
          id="logoImage"
          src={
            dev ? "/readingforward.svg" : "/readingforward/readingforward.svg"
          }
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
  } else {
    const imgDim = 70;

    return (
      <div className="flex justify-center align-center pt-6">
        {/* <img
          src="/readingforward.svg"
          className="w-[1.35em] mx-[0.4em]"
          alt="Reading Forward logo"
        /> */}
        <Image
          src={
            dev ? "/readingforward.svg" : "/readingforward/readingforward.svg"
          }
          alt="Reading Forward Logo"
          width={imgDim}
          height={imgDim}
          className="mx-4"
        />
        <h1 className="flex items-center text-5xl">Reading Forward</h1>
      </div>
    );
  }
};
