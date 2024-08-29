import { ReadingForwardLogo } from "@/components/readingForwardLogo";

export default function Home() {
  
  return (
      <section className="w-full h-full grid grid-rows-2">
          <div className="grid grid-rows-[min-content, auto] sm:h-full h-[80vh]">
            <div className="h-fit flex flex-col justify-center">
              <ReadingForwardLogo animation={false} />
              <p className="text-xl text-center ">
                Turning Pages, Igniting Minds
              </p>
            </div>
            <div className="grid md:grid-cols-3 md:grid-rows-none sm:grid-rows-[min-content, auto] sm:grid-cols-1">
              <div id="card" className="m-8 rounded-xl hover:scale-105 transition-all duration-300 h-fit">
                <div id="cardBody" className=" text-white">
                  <h2 className="text-[1.7em] border-b-2 border-gray-600 w-fit ml-3 mb-3 px-3 bg-slate-600 text-white rounded-lg">
                    About
                  </h2>
                  <p className="p-2 leading-normal bg-black bg-opacity-25 rounded-lg">
                    With a BA in Studio Art from Gustavus Adolphus College and licenses in Elementary Education and K-12 Reading from 
                    Augsburg College and Hamline University respectively, Nativida taught grades 2-6 in Minneapolis Public Schools. 
                    Motivated by a passion for reading accessibility, she pursued Orton Gillingham training. Now, she empowers learners
                    at both private settings and Groves Learning Organization.
                  </p>
                </div>
              </div>
              <div id="card" className="m-10 rounded-xl hover:scale-105 transition-all duration-300 h-fit">
                <div id="cardBody" className=" text-white">
                  <h2 className="text-[1.7em] border-b-2 border-gray-600 w-fit ml-3 mb-3 px-3 bg-slate-600 text-white rounded-lg">
                    My Mission
                  </h2>
                  <p className="p-2 leading-normal bg-black bg-opacity-25 rounded-lg">
                    I am committed to advancing students on their literacy journey through personalized instruction and unwavering support.
                  </p>
                </div>
              </div>
              <div id="card" className="bg-white m-10 rounded-xl hover:scale-105 transition-all duration-300 h-fit">
                <div id="cardBody" className=" text-black">
                  <h2 className="text-[1.7em] border-b-2 border-gray-600 w-full pl-3 bg-slate-600 text-white rounded-t-lg">
                    What I do
                  </h2>
                  <p className="p-2 leading-normal">
                    The goal is simple: to support students on their literacy journey with structured and personalized instruction. 
                    I believe in giving you the tools and guidance you need to understand language deeply. With tailored strategies and 
                    steady support, I'll assist you in understanding sounds and word patterns, improving your reading and writing skills with
                    accuracy and confidence. Together, we move forward, unlocking the boundless possibilities that literacy affords.
                  </p>
                </div>
              </div>
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
