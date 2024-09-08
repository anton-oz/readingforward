import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FaqAccordion() {
  interface InfoObj {
    title: string;
    content: string | (string | string[])[];
  }

  const info: InfoObj[] = [
    {
      title: "Who Am I?",
      content:
        "With a BA in Studio Art from Gustavus Adolphus College and licenses in Elementary Education and K-12 Reading from Augsburg College and Hamline University respectively, Nativida taught grades 2-6 in Minneapolis Public Schools. Motivated by a passion for reading accessibility, she pursued Orton Gillingham training. Now, she empowers learners at both private settings and Groves Learning Organization.",
    },
    {
      title: "What I do",
      content:
        "The goal is simple: to support students on their literacy journey with structured and personalized instruction. I believe in giving you the tools and guidance you need to understand language deeply. With tailored strategies and steady support, I'll assist you in understanding sounds and word patterns, improving your reading and writing skills with accuracy and confidence. Together, we move forward, unlocking the boundless possibilities that literacy affords.",
    },
    {
      title: "What I offer",
      content:
        "As an educator, my focus lies in teaching reading, spelling, and writing using Structured Literacy. What's truly notable about Structured Literacy is its universal effectiveness, benefiting students at every level, whether they're dyslexic, have other diverse learning needs, catching up or excelling. With me, students receive tailored, one-on-one Orton Gillingham instruction in reading, writing, and spelling, ensuring personalized support for their unique journey.",
    },
    {
      title: "What is Structured Literacy?",
      content: [
        "Structured Literacy is an educational approach aimed at teaching literacy skills in a systematic and explicit manner. It is designed to help individuals, particularly those with dyslexia or other language-based learning differences, develop strong foundational skills in reading, writing, and spelling.",
        "Key components of structured literacy typically include:",
        // array for <ul>
        [
          "Phonology: Teaching the relationship between sounds and their corresponding letters or letter combinations",
          "Phonics: Teaching the sounds associated with individual letters and groups of letters, as well as how they blend together to form words.",
          "Syllable instruction: Teaching how to recognize and decode syllables in words, which aids in pronunciation and spelling.",
          "Morphology: Teaching the meaningful parts of words, such as prefixes, suffixes, and root words, to enhance vocabulary and decoding skills.",
          "Syntax: Teaching the structure and organization of sentences, including grammar rules and sentence construction.",
          "emantics: Teaching the meaning of words and sentences, including comprehension strategies and vocabulary development.",
        ],
        " Structured literacy instruction is often systematic, meaning it follows a logical sequence of skills progression, and explicit, meaning concepts are taught directly and clearly. This approach aims to provide struggling readers with the necessary skills and strategies to become proficient readers and writers.",
      ],
    },
    {
      title: "What is Orton Gillingham?",
      content: [
        "Orton Gillingham (OG) stands out as an educational approach focused on teaching the intricate structure and code of the English language. Rooted in a philosophy dating back to the 1930s, it guides learners from fundamental phonological awareness and pre-reading skills to mastering advanced language structures. Ultimately, Orton Gillingham embodies the principles of Structured Literacy.",
        "In alphabetic systems, letters are named and typically arranged in a specific order. In a phonological context, letters are linked to specific sounds, and phonological awareness involves recognizing and manipulating these sounds in spoken language. The combination of alphabetic and phonological knowledge is crucial for mastering reading and writing in alphabetic writing systems.",
        "Simultaneous and multisensory teaching takes a holistic approach, engaging visual, auditory, kinesthetic, and tactile pathways. The tactile aspect involves tracing words and sounds, enhancing awareness of speech mechanics. Throughout instruction, reading, writing, spelling, and speaking are integrated for a cohesive learning experience.",
        "Individualized and emotionally supportive education promotes stress-free learning, fostering positive attitudes and motivation while tailoring instruction to each learner's needs.",
        "Structured, sequential language instruction introduces elements systematically, progressing from simple to complex, establishing a solid foundation for language acquisition.",
        "Automaticity in learning entails mastering a skill to the point where it becomes second nature, freeing cognitive resources for higher-level tasks.",
        "In a cognitive and intellectualized approach, students learn English patterns, enabling independent, reasoned thinking and skill-building through analysis and application of linguistic principles.",
        "Direct and explicit teaching presents concepts clearly without assuming prior knowledge, offering immediate feedback for guidance.",
        "Synthetic learning focuses on understanding how parts collaborate to form a unified whole, while analytic instruction involves breaking down the whole into individual parts for examination.",
        "In a diagnostic and prescriptive approach, instruction is continually adjusted based on ongoing assessment, addressing progress and challenges in real-time.",
        "Systematic and cumulative instruction follows a logical sequence, building on previously mastered material and connecting new information to prior knowledge for comprehensive language understanding.",
      ],
    },
    {
      title: "How often and how long are sessions?",
      content:
        "Twice weekly sessions are recommended. They are 55 minutes long.",
    },
    {
      title: "How much does each session cost?",
      content:
        "Each 55-minute session is $75. This covers the lesson plans and materials, as well as the session itself with the student. All session content is customized based on the unique needs and progress of each student. Additionally, scheduling and communication with parents are included in this fee.",
    },
    {
      title: "Where do the sessions happen?",
      content:
        "In-person or virtually (via Zoom). For in-home sessions, a modest fee may apply based on the distance traveled. Alternatively, with online learning, geography is no longer a limitation—you can join from anywhere!",
    },
    {
      title: "Who do you work with?",
      content: "I've worked with students from age six to thirty-nine. ",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full h-full row-start-2 p-4 "
    >
      {info.map((item, i) => (
        <AccordionItem value={`item-${i}`} key={i}>
          <AccordionTrigger className="text-4xl text-left font-normal decoration-2 pl-4 underline-offset-4">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-2xl">
            <Card className="p-4">
              <CardContent className="text-left space-y-4 p-0">
                {Array.isArray(item.content)
                  ? item.content.map((item, i) =>
                      Array.isArray(item) ? (
                        <ul className="list-disc pl-6 space-y-2">
                          {item.map((item, i) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={i}>{item}</p>
                      )
                    )
                  : item.content}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
