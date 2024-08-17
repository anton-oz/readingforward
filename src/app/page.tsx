import { ReadingForwardLogo } from "@/components/readingForwardLogo";

export default function Home() {
  
  return (
      <section className="w-full h-full grid grid-rows-2">
          <div id="mainLogo" className="text-7xl grid grid-rows-2 h-[80vh]">
            <ReadingForwardLogo animation={false} />
            <p className="text-xl text-center absolute left-[40%] top-[43%]">
              Turning Pages, Igniting Minds
            </p>
          </div>
          <div id="divSnap" className="grid grid-cols-3">
            <div></div>
            <div></div>
            <div></div>
          </div>
      </section>
  );
}
