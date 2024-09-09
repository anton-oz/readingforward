import type { Metadata } from "next";
import { Suspense } from "react";
import { Quicksand } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

import Link from "next/link";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Reading Forward",
  description: "Generated by create next app",
};

const dev = process.env.NEXT_PUBLIC_DEV === "1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-clip">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={
            dev ? "/readingforward.svg" : "/readingforward/readingforward.svg"
          }
        />
      </head>
      <body
        className={
          quicksand.className +
          "lg:text-[20px] md:text-[16px] sm:text-[14px] text-[10px] h-screen min-h-screen flex flex-col bg-blue-50"
        }
      >
        <Nav />
        <main className="flex-grow h-full max-w-screen grid place-items-center items-center">
          {children}
        </main>
        <footer className="sticky bottom-0 flex justify-end items-center p-2 border-t-2 border-t-zinc-800 bg-blue-100 text-darkerBlueski font-extralight">
          <p>Created by</p>
          <Link
            href="https://anton-oz.github.io/ptflio/"
            target="_blank"
            className="mx-1 hover:underline underline-offset-4 hover:text-black"
          >
            Anton Osland
          </Link>
        </footer>
      </body>
    </html>
  );
}
