import type { Metadata } from "next";
import { Suspense } from "react";
import { Quicksand } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

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
    <html lang="en">
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
          "lg:text-[20px] md:text-[16px] sm:text-[14px] text-[10px] bg-slate-100"
        }
      >
        <main className="h-screen grid grid-rows-[auto,1fr] place-items-center items-center">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
