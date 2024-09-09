"use client";
// TODO: move

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel } from "@trendyol-js/react-carousel";

export default function AboutMe() {
  const placeholderDimensions = 150;

  const carouselCards = [
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
  ];

  return (
    <section className="w-full h-full bg-white p-4 flex items-start justify-center ">
      <div className="w-full md:w-[70%] grid grid-rows-[auto,1fr] space-y-4">
        <div className="flex justify-center items-center w-full space-x-6">
          <Image
            src="https://placehold.co/250"
            height={placeholderDimensions}
            width={placeholderDimensions}
            alt="placeholder image"
            unoptimized
            className="object-cover rounded-md h-[150px] w-[150px] md:w-[200px] md:h-[200px] "
          />
          <div className="flex flex-col justify-center items-center pt-3">
            Contact:
            <Link
              href="mailto:test@example.com"
              className="flex items-center hover:underline hover:scale-105 transition-all duration-200"
            >
              test@example.com
              <Mail size={25} className="pl-1" />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden w-full h-full">
          <Carousel
            show={1}
            infinite
            slide={1}
            swiping={true}
            className="w-[60%]"
          >
            {carouselCards.map((item, i) => (
              <Card key={i} className="h-[50vh] md:h-full">
                <CardHeader>
                  <CardTitle className="text-4xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
