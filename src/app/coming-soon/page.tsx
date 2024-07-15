"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import SparklesText from "@/components/ui/sparkles-text";

export default function Page() {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto py-40 bg-grid-small-black/[0.1]"
      backgroundFill="white"
    >
      <SparklesText className="text-stone-800" text="Coming Soon !!" />
    </WavyBackground>
  );
}
