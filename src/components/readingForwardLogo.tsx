"use client";
import { animate } from "motion"
import { FC } from "react";

type props = {
    animation: boolean
}

export const ReadingForwardLogo: FC<props> = ({ animation }) => {


    if (animation) {
        return (
            <div 
                id="readingForwardLogo" 
                className="flex justify-center align-center "
                onMouseEnter={() => {
                    animate('#logoImage', { transform: "translateX(12.75em)" }, { duration: 0.5 })
                    animate('#logoName', { transform: 'translateX(-1.75em)' }, { duration: 0.5 })
                }}
                onMouseLeave={() => {
                    animate('#logoImage', { transform: "translateX(0)" }, { duration: 0.5 })
                    animate('#logoName', { transform: 'translateX(0)' }, { duration: 0.5 })
                }}
            >
                <img id="logoImage" src="/readingforward.svg" className="w-[2.5em] mx-[0.4em]" />
                <h1 id="logoName" className="text-2xl grid items-center">
                    Reading Forward
                </h1>
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-center align-center">
                <img src="/readingforward.svg" className="w-[1.5em] mx-[0.4em]" />
                <h1 className="grid items-center">
                    Reading Forward
                </h1>
            </div>
        )
    }
}