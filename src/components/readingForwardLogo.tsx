"use client";
import { animate } from "motion"
import { FC } from "react";
import Image from "next/image";

type props = {
    animation: boolean
}

export const ReadingForwardLogo: FC<props> = ({ animation }) => {

    const dev = process.env.NEXT_PUBLIC_DEV === '1';

    if (animation) {
        return (
            <div 
                id="readingForwardLogo" 
                className="flex justify-center align-center"
                onMouseEnter={() => {
                    animate('#logoImage', { transform: "translateX(495%)" }, { duration: 0.5 })
                    animate('#logoName', { transform: 'translateX(-22%)' }, { duration: 0.5 })
                }}
                onMouseLeave={() => {
                    animate('#logoImage', { transform: "translateX(0)" }, { duration: 0.5 })
                    animate('#logoName', { transform: 'translateX(0)' }, { duration: 0.5 })
                }}
            >
                <Image priority={true} id="logoImage" src={dev ? '/readingforward.svg' : "/readingforward/readingforward.svg"}  width={40} height={40} className="mx-[0.4em] text-blueski" alt="Reading Forward logo" />
                <b id="logoName" className="text-2xl grid items-center">
                    Reading Forward
                </b>
            </div>
        )
    }
    // else {
    //     return (
    //         <div className="flex justify-center align-center lg:text-[5.5em] text-[4em]">
    //             <img src="/readingforward.svg" className="w-[1.35em] mx-[0.4em]" alt="Reading Forward logo" />
    //             <h1 className="grid items-center">
    //                 Reading Forward
    //             </h1>
    //         </div>
    //     )
    // }
}