import { ReadingForwardLogo } from "@/components/readingForwardLogo";

import CardStack from "@/components/CardStack";

export default function Home() {
  
  return (
      <section className="w-full h-full grid grid-rows-2">
          <div className="sm:h-full h-[80vh]">
            <div className="h-fit flex flex-col justify-start">
              {/* delete? */}
              {/* <ReadingForwardLogo animation={false} /> */}
              <p className="text-xl text-center mt-[4em] font-black" style={{textShadow: "1px 1px 0.1px rgba(0,0,0,0.2)"}}>
                Turning Pages, Igniting Minds
              </p>
              <CardStack />

            </div>
          </div>
          <div id="divSnap" className="grid grid-cols-3 h-[90vh]">
            <div></div>
            <div></div>
            <div></div>
          </div>
      </section>
  );
}
