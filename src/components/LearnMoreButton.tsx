"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LearnMoreButton() {
  return (
    <Button className="scale-75 sm:scale-100 bg-white text-[#306096] hover:bg-[#e0e0e0] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#306096] transition-colors py-2 px-4 flex items-center space-x-2">
      <Link href="/faq">Learn More</Link>
      <ArrowRight className="w-4 h-4" />
    </Button>
  );
}
