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
    content: string;
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
      content: "I’ve worked with students from age six to thirty-nine. ",
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
              <CardContent className="text-left p-0">
                {item.content}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
