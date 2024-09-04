"use strict";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export function About() {
  const summary = [
    {
      id: 1,
      imageURl: "/images/sources.gif",
      title: "What is Snapnews?",
      description:
        "Snapnews is a summary-first news app that delivers the latest headlines in 60 words or less, offering a fast and efficient way to stay informed.",
      headingStyle: "text-green-900 pt-6 pb-2",
      background: "bg-gradient-to-b from-blue-400 via-blue-100 to-slate-50",
    },
    {
      id: 2,
      imageURl: "/images/LLM.gif",
      title: "Key Features",
      description:
        "Powered by LLM for real-time, accurate news summaries, personalized feeds, and a seamless speed scrolling experience.",
      headingStyle: "text-sky-900 pt-6 pb-2",
      background: "bg-gradient-to-b from-green-600 via-green-100 to-slate-50",
    },
    {
      id: 3,
      imageURl: "/images/concise.gif",
      title: "Why Snapnews?",
      description:
        "Snapnews delivers concise, personalized news quickly, making it perfect for busy individuals. Coming soon to iOS and Android!",
      headingStyle: "text-yellow-700 pt-6 pb-2",
      background: "bg-gradient-to-b  from-yellow-500 via-orange-100 to-orange-50",
    },
  ];

  return (
    <>
      <section id="about" className="w-full">
        <div className="bg-white py-16 lg:py-28">
          <div className="flex flex-col items-center px-8">
            <div className="">
              <span className="text-slate-800 font-rubik text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium pr-2 lg:pr-4">
                About
              </span>
              <span className="text-snapNewsColor-blue font-rubik text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
                SnapNews
              </span>
            </div>
            <p className="max-w-2xl text-md lg:text-2xl text-center lg:text-left font-light text-slate-800 leading-relaxed pt-2 pb-12">
              Snapnews is transforming your news reading experience with
              lightning-fast, LLM-powered summaries and personalized
              feeds—coming soon to iOS & Android!
            </p>
          </div>

          <div className="w-full rounded-md flex flex-col lg:flex-row items-center justify-center">
            {summary.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "relative flex flex-col items-center justify-end w-[350px] h-[450px] max-w-full rounded-xl mx-4 p-2 my-8 lg:my-0",
                  item.background
                )}
              >
                <div className="rounded-xl bg-gradient-to-br from-sky-200 via-teal-50 to-white">
                  <Image
                    src={item.imageURl}
                    alt={item.title}
                    width={350}
                    height={600}
                    className="absolute top-0 left-0 object-contain rounded-t-xl pt-2 px-2"
                    loading="lazy"
                  />
                </div>

                <div
                  className={cn(
                    "text-lg font-semibold text-center uppercase",
                    item.headingStyle
                  )}
                >
                  {item.title}
                </div>
                <div className="px-8 mb-12 text-gray-500 text-center">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
