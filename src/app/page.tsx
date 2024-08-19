"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroHeaderSmooth } from "@/components/ui/hero-header";
import { IconBrandAppleFilled, IconBrandGooglePlay } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { Summary } from "@/components/Summary";
import { ScreenScroll } from "@/components/ScreenScroll";
import { AnimatedCategories } from "@/components/ui/animated-categories";

import { Feature } from "@/components/Feature";
import { ContentStrategy } from "@/components/ContentStrategy";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Page() {
  const features = [
    {
      title: "Instant access",
      description:
        "Get the latest news straight to your phone in under 60 words.",
      content: <Summary />,
    },
    {
      title: "Speed Scrolling",
      description:
        "A TikTok-inspired scrolling Ux enhances user engagement and provides a dynamic news browsing experience.",
      content: <ScreenScroll />,
    },
    {
      title: "Personalization",
      description:
        "Users can select their preferred news categories, ensuring they receive relevant and tailored content.",
      content: <AnimatedCategories />,
    },
  ];

  const words = [
    {
      text: "Snapnews",
      className: "font-bold text-snapNewsColor-blue",
    },
  ];

  const people = [
    {
      id: 1,
      name: "Nitin Sharma",
      designation: "CEO",
      image: "/images/sabya.jpeg",
    },
    {
      id: 2,
      name: "Sabya Sachi Das",
      designation: "Data Strategy",
      image: "/images/sabya.jpeg",
    },
    {
      id: 3,
      name: "Ambaram Srivastava",
      designation: "CTO",
      image: "/images/sabya.jpeg",
    },
    {
      id: 4,
      name: "Ajit Dhadharia",
      designation: "Lead Developer",
      image: "/images/ajit.jpeg",
    },
    {
      id: 5,
      name: "Anchit Gujral",
      designation: "Content Sourcing",
      image: "/images/anchit.jpeg",
    },
  ];

  return (
    <main className="flex bg-white min-h-screen min-w-full flex-col items-center justify-between bg-grid-black/[0.02]">
      <Navbar />
      <section
        id="home"
        className="flex justify-between py-20 bg-gradient-to-b from-transparent to-white"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate-800 text-7xl text-center font-semibold uppercase font-rubik">
            News simplified with
          </p>
          <HeroHeaderSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
            <Link
              href="/coming-soon"
              className="flex rounded-md border border-transparent text-white px-4 py-2 items-center
               border-neutral-300 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md font-light bg-gradient-to-b from-[#464d55] to-[#25292e]"
            >
              <IconBrandAppleFilled className="size-11" />
              <div className="flex flex-col px-1">
                <span className="text-xs pb-0 font-rubik">Coming soon on</span>
                <span className="text-xl font-rubik">App Store</span>
              </div>
            </Link>
            <Link
              href="/coming-soon"
              className="flex rounded-md border border-transparent text-white px-4 py-2 items-center
               border-neutral-300 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md font-light bg-gradient-to-b from-[#464d55] to-[#25292e]"
            >
              <IconBrandGooglePlay className="size-11" />
              <div className="flex flex-col px-1">
                <span className="text-xs pb-0 font-rubik">Coming soon on</span>
                <span className="text-xl font-rubik">Play Store</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="pt-20 ps-20 transform hover:-translate-y-1 transition duration-400">
          <div className="relative rounded-45">
            <Image
              height={300}
              width={300}
              src="/home-image.png"
              alt="home screen"
            />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-screen flex flex-col items-center py-20 bg-gradient-to-b from-white to-transparent"
      >
        <div className="py-10">
          <span className="text-slate-900 font-rubik text-5xl font-medium pr-4">
            Snapnews
          </span>
          <span className="text-snapNewsColor-blue font-rubik text-5xl font-medium">
            Features
          </span>
        </div>

        <div className="flex flex-col">
          <Feature features={features} />
        </div>
      </section>
      <section id="strategy">
        <ContentStrategy />
      </section>
      <section id="team" className="pb-24">
        <div className="flex justify-center pt-20 pb-10">
          <span className="text-black font-rubik text-5xl font-medium pr-4">
            Meet our
          </span>
          <span className="text-snapNewsColor-blue font-rubik text-5xl font-medium">
            Team
          </span>
        </div>
        <p className="font-rubik text-center text-slate-800 text-2xl max-w-5xl pb-10">
          Snapnews.ai is privately held by its founder members, ensuring a
          unified vision and strategic direction. The Snapnews team is entirely
          based out of Toronto, Canada.
        </p>
        <div className="flex flex-row items-center justify-center my-4 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
