"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LearnMoreButton() {
  return (
    <Button className="bg-white text-[#306096] hover:bg-[#e0e0e0] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#306096] transition-colors py-2 px-4 flex items-center space-x-2">
      <Link href="/about">Learn More</Link>
      <ArrowRight className="w-4 h-4" />
    </Button>
  );
}
