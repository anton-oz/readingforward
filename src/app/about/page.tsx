"use client";
// TODO: move

import Image from "next/image";
import Link from "next/link";
import { Mail, MoveHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";

export default function AboutMe() {
  const placeholderDimensions = 150;

  const carouselCards = [
    {
      title: "Who Am I?",
      // content:
      //   "With a BA in Studio Art from Gustavus Adolphus College and licenses in Elementary Education and K-12 Reading from Augsburg College and Hamline University respectively, Nativida taught grades 2-6 in Minneapolis Public Schools. Motivated by a passion for reading accessibility, she pursued Orton Gillingham training. Now, she empowers learners at both private settings and Groves Learning Organization.",
      content: [
        "With a BA in Studio Art from Gustavus Adolphus College and licenses in Elementary Education and K-12 Reading from Augsburg College and Hamline University respectively, I began my career teaching grades 2-6 in Minneapolis Public Schools. Driven by a belief in everyone’s right to literacy, I trained in Orton-Gillingham and now work to empower learners in both private settings and Groves Learning Organization.",
        "I grew up moving across the country—from the forests of the Pacific Northwest to the bustling streets of the Bay Area, through Chicago's winters and the desert sun of Phoenix—before finding my home in Minnesota. Here, I spend my days with my husband, and, on the best of days, our two grown sons, family, and friends. I lose myself in long walks outdoors, knitting, and books that take me on journeys of their own; each thread, each trail, each page, another world to experience. Robin Wall Kimmerer’s words echo back to me often: “all flourishing is mutual.” We’re all stitched into each other’s stories, whether we see it or not.",
      ],
    },
    {
      title: "What I do",
      content:
        "The goal is simple: to support students on their literacy journey with structured and personalized instruction. I believe in giving you the tools and guidance you need to understand language deeply. With tailored strategies and steady support, I'll assist you in understanding sounds and word patterns, improving your reading and writing skills with accuracy and confidence. Together, we move forward, unlocking the boundless possibilities that literacy affords.",
    },
    {
      title: "What I offer",
      content:
        "As an educator, my focus lies in teaching reading, spelling, and writing using Structured Literacy. What's notable about Structured Literacy is its universal effectiveness, benefiting students at every level, whether they're dyslexic, have other diverse learning needs, catching up or excelling. With me, students receive tailored, one-on-one Orton Gillingham instruction in reading, writing, and spelling, ensuring personalized support for their unique journey.",
    },
  ];

  useEffect(() => {
    for (let i in carouselCards) {
      console.log(carouselCards[i].content.length);
    }
  });

  return (
    <section className="w-full h-full bg-white p-4 flex items-start justify-center ">
      <div className="w-full md:w-[70%] grid grid-rows-[auto,1fr] space-y-4">
        <div className="flex justify-center items-start w-full space-x-3 sm:space-x-6">
          <Image
            src="https://placehold.co/250"
            height={placeholderDimensions}
            width={placeholderDimensions}
            alt="placeholder image"
            unoptimized
            className="object-cover rounded-md h-[150px] w-[150px] md:w-[200px] md:h-[200px] "
          />
          <div className="h-full sm:h-[80%] flex flex-col justify-around items-start text-xl">
            <div>
              <h2 className="text-lg sm:text-2xl font-medium">
                Nativida Osland
              </h2>
              <p className="text-sm sm:text-base font-light text-wrap w-52 sm:w-full">
                Certified Orton Gillingham Reading Specialist
              </p>
            </div>
            <div className="flex flex-col justify-start items-start pt-2">
              <p className="font-medium">Contact:</p>
              <Link
                href="mailto:readingforwardmn@gmail.com"
                className="flex items-center underline hover:font-normal transition-all duration-200 font-light text-sm sm:text-base text-wrap w-52 sm:w-full"
              >
                readingforwardmn@gmail.com
                <Mail size={25} className="pl-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full h-full flex flex-col items-center justify-center">
          <Carousel className="w-full sm:w-[] xl:w-[90%] xl:max-w-[50vw] h-full">
            <CarouselContent>
              {carouselCards.map((item, i) => (
                <CarouselItem key={i}>
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-3xl sm:text-4xl">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {Array.isArray(item.content) ? (
                          item.content.map((paragraph, j) => (
                            <p className="text-lg sm:text-2xl" key={j}>
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="text-lg sm:text-2xl">{item.content}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="invisible sm:visible" />
            <CarouselNext className="invisible sm:visible" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
