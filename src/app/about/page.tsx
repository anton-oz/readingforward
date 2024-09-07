import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
import { MoveDown, MoveUp } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section
      id="scrollContainer"
      className="w-full h-[80vh] overflow-y-auto snap-y snap-mandatory bg-blue-50"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* first column */}
      <div
        id="structuredLiteracy"
        className="h-fit md:h-[80vh] snap-start flex flex-col items-center justify-center p-4"
      >
        <h2 className="w-full md:w-[60%] text-center font-bold text-4xl md:text-5xl mb-5 bg-darkBlueski text-white p-2 rounded-md">
          What is Structured Literacy?
        </h2>
        <ScrollArea
          className="h-[20em] w-full md:w-[60%] border-2 border-zinc-500 rounded-md bg-slate-50 text-2xl custom-scrollbar"
          type="always"
        >
          <div className="space-y-4 p-4">
            <p>
              Structured Literacy is an educational approach aimed at teaching
              literacy skills in a systematic and explicit manner. It is
              designed to help individuals, particularly those with dyslexia or
              other language-based learning differences, develop strong
              foundational skills in reading, writing, and spelling.
            </p>
            <p>Key components of structured literacy typically include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Phonology: Teaching the relationship between sounds and their
                corresponding letters or letter combinations.
              </li>
              <li>
                Phonics: Teaching the sounds associated with individual letters
                and groups of letters, as well as how they blend together to
                form words.
              </li>
              <li>
                Syllable instruction: Teaching how to recognize and decode
                syllables in words, which aids in pronunciation and spelling.
              </li>
              <li>
                Morphology: Teaching the meaningful parts of words, such as
                prefixes, suffixes, and root words, to enhance vocabulary and
                decoding skills.
              </li>
              <li>
                Syntax: Teaching the structure and organization of sentences,
                including grammar rules and sentence construction.
              </li>
              <li>
                Semantics: Teaching the meaning of words and sentences,
                including comprehension strategies and vocabulary development.
              </li>
            </ul>
            <p>
              Structured literacy instruction is often systematic, meaning it
              follows a logical sequence of skills progression, and explicit,
              meaning concepts are taught directly and clearly. This approach
              aims to provide struggling readers with the necessary skills and
              strategies to become proficient readers and writers.
            </p>
          </div>
          <ScrollBar />
        </ScrollArea>
        <Link href="#ortonGillingham" className="relative">
          <div className="absolute left-[35vw] bottom-[25vh] transition-all duration-200 hover:scale-105">
            <MoveDown size={100} className="" />
            <p className="w-max ">scroll for more</p>
          </div>
        </Link>
      </div>
      {/* second column */}
      <div
        id="ortonGillingham"
        className="h-full md:h-[80vh] snap-start flex flex-col items-center justify-center p-4"
      >
        <h2 className="w-[60%] text-center font-bold text-5xl mb-5 bg-darkBlueski text-white p-2 rounded-md">
          What is Orton Gillingham?
        </h2>
        <ScrollArea
          className="h-96 w-[60%] border-2 border-zinc-500 rounded-md bg-slate-50 text-2xl custom-scrollbar"
          type="always"
        >
          <div className="space-y-4 p-4">
            <p>
              Orton Gillingham (OG) stands out as an educational approach
              focused on teaching the intricate structure and code of the
              English language. Rooted in a philosophy dating back to the 1930s,
              it guides learners from fundamental phonological awareness and
              pre-reading skills to mastering advanced language structures.
              Ultimately, Orton Gillingham embodies the principles of Structured
              Literacy.
            </p>
            <p>
              In alphabetic systems, letters are named and typically arranged in
              a specific order. In a phonological context, letters are linked to
              specific sounds, and phonological awareness involves recognizing
              and manipulating these sounds in spoken language. The combination
              of alphabetic and phonological knowledge is crucial for mastering
              reading and writing in alphabetic writing systems.
            </p>
            <p>
              Simultaneous and multisensory teaching takes a holistic approach,
              engaging visual, auditory, kinesthetic, and tactile pathways. The
              tactile aspect involves tracing words and sounds, enhancing
              awareness of speech mechanics. Throughout instruction, reading,
              writing, spelling, and speaking are integrated for a cohesive
              learning experience.
            </p>
            <p>
              Individualized and emotionally supportive education promotes
              stress-free learning, fostering positive attitudes and motivation
              while tailoring instruction to each learner's needs.
            </p>
            <p>
              Structured, sequential language instruction introduces elements
              systematically, progressing from simple to complex, establishing a
              solid foundation for language acquisition.
            </p>
            <p>
              Automaticity in learning entails mastering a skill to the point
              where it becomes second nature, freeing cognitive resources for
              higher-level tasks.
            </p>
            <p>
              In a cognitive and intellectualized approach, students learn
              English patterns, enabling independent, reasoned thinking and
              skill-building through analysis and application of linguistic
              principles.
            </p>
            <p>
              Direct and explicit teaching presents concepts clearly without
              assuming prior knowledge, offering immediate feedback for
              guidance.
            </p>
            <p>
              Synthetic learning focuses on understanding how parts collaborate
              to form a unified whole, while analytic instruction involves
              breaking down the whole into individual parts for examination.
            </p>
            <p>
              In a diagnostic and prescriptive approach, instruction is
              continually adjusted based on ongoing assessment, addressing
              progress and challenges in real-time.
            </p>
            <p>
              Systematic and cumulative instruction follows a logical sequence,
              building on previously mastered material and connecting new
              information to prior knowledge for comprehensive language
              understanding.
            </p>
          </div>
          <ScrollBar />
        </ScrollArea>
        <Link href="#structuredLiteracy" className="relative">
          <div className="absolute left-[35vw] bottom-[25vh] transition-all duration-200 hover:scale-105">
            <MoveUp size={100} />
            <p className="w-full text-center">to top</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
