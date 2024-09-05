import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  interface InfoObj {
    title: string;
    content: string;
  }

  const info: InfoObj[] = [
    {
      title: "Mission",
      content:
        "I am committed to advancing students on their literacy journey through personalized instruction and unwavering support.",
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
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full h-full row-start-2 p-4 m-2 "
    >
      {info.map((item, i) => (
        <AccordionItem value={`item-${i}`} key={i}>
          <AccordionTrigger className="text-4xl font-normal decoration-2 pl-4 underline-offset-4">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-2xl">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
