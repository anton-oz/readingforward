import {FC} from 'react'

import { ReadingForwardLogo } from "@/components/readingForwardLogo";

import Book from "@/components/Book";


export default function Home() {
  
  return (
      <section className="h-full w-full grid grid-rows-3 text-center">
        <div className="flex flex-col items-center justify-center">
          <Book />
        </div>
        <p className="font-bold text-xl">Turning Pages, Igniting Minds</p>
      </section>
  );
}

