"use client";
import React from "react";
import Image from "next/image";

import { IconVocabulary } from "@tabler/icons-react";

export const Feature = () => {
  const features = [
    {
      title: "Quick Summaries",
      description:
        "Get the day’s top stories in just 60 words. Snapnews delivers concise, clear updates so you stay informed without the clutter.",
      imageSrc: "/images/summary.svg",
    },
    {
      title: "Speed Scrolling",
      description:
        "Flip through engaging news summaries with ease. Our TikTok-like scrolling keeps you moving swiftly through the latest headlines and updates.",
      imageSrc: "/images/phone_scroll.gif",
    },
    {
      title: "Customizable Feed",
      description:
        "Select from seven news categories to tailor your feed. Only see the stories that matter to you, all in one streamlined, personalized experience.",
      imageSrc: "/images/news_categories.svg",
    },
    {
      title: "Save for Later",
      description:
        "Bookmark articles to read later. Snapnews lets you save interesting stories so you can revisit them whenever you have more time.",
      imageSrc: "/images/bookmark.gif",
    },
  ];
  return (
    <>
      <section
        id="features"
        className="w-full flex justify-center shadow-custom-black"
      >
        <div className="max-w-7xl flex flex-col items-center justify-center py-12">
          <div className="relative bg-snapNewsColor-blue p-1 rounded-md shadow-blue-700 mt-8 shadow-custom-blue">
            <div className="rounded-sm bg-white p-1">
              <IconVocabulary className="size-8 text-snapNewsColor-blue" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-8">
            <div>
              <span className="text-slate-800 font-rubik text-3xl md:text-4xl lg:text-5xl font-medium pr-2 lg:pr-4">
                Why choose
              </span>
              <span className="text-snapNewsColor-blue font-rubik text-3xl md:text-4xl lg:text-5xl font-medium">
                SnapNews
              </span>
              <span className="text-slate-800 font-rubik text-3xl md:text-4xl lg:text-5xl font-medium lg:pr-4">
                ?
              </span>
            </div>
            <p className="max-w-3xl text-md lg:text-xl text-center lg:text-center font-light text-slate-800 lg:leading-tight pt-6 px-6">
              Get the day’s top stories in 60-word summaries. Flip through
              concise news updates, stay informed fast, and customize your
              feed—all with no fluff, just the facts.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center text-slate-800 pt-20 lg:pt-28">
            <div className="flex flex-col lg:flex-row justify-center items-center mb-24 bg-white rounded-xl shadow-custom-white">
              <div className="px-4">
                <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-rubik font-semibold uppercase">
                  {features[0].title}
                </h1>
                <p className="text-xl font-rubik font-normal text-center lg:text-left lg:max-w-lg text-slate-600 lg:leading-relaxed lg:pt-4 lg:pe-20">
                  {features[0].description}
                </p>
              </div>
              <div className="border border-sky-200 rounded-xl p-2 bg-gradient-to-br  from-sky-500 to-teal-200 mt-8 lg:m-0">
                <div className="relative w-80 h-80 lg:w-128 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-sky-200 via-teal-50 to-white">
                  <Image
                    src={features[0].imageSrc}
                    alt={features[0].title}
                    width={350}
                    height={350}
                    className="absolute -bottom-12 left-3 lg:left-24 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center mb-24 bg-white shadow-custom-white">
              <div className="border border-green-200 rounded-xl p-2 bg-gradient-to-br from-green-400 to-lime-200">
                <div className="relative w-128 h-96 overflow-hidden rounded-xl bg-gradient-to-br from-green-400 via-green-200 to-white">
                  <Image
                    src={features[1].imageSrc}
                    alt={features[1].title}
                    width={475}
                    height={475}
                    className="absolute -bottom-4 left-5 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-right text-4xl font-rubik font-semibold uppercase">
                  {features[1].title}
                </h1>
                <p className="text-right text-xl font-rubik font-normal max-w-lg text-slate-600 pt-4 ps-20">
                  {features[1].description}
                </p>
              </div>
            </div>
            <div className="flex lg:hidden flex-col lg:flex-row justify-center items-center mb-24 bg-white rounded-xl shadow-custom-white">
              <div className="px-4">
                <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-rubik font-semibold uppercase">
                  {features[1].title}
                </h1>
                <p className="text-xl font-rubik font-normal text-center lg:text-left lg:max-w-lg text-slate-600 lg:leading-relaxed lg:pt-4 lg:pe-20">
                  {features[1].description}
                </p>
              </div>
              <div className="border border-green-200 rounded-xl p-2 bg-gradient-to-br from-green-400 to-lime-200 mt-8 lg:m-0">
                <div className="relative w-80 h-64 lg:w-128 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-green-400 via-green-200 to-white">
                  <Image
                    src={features[1].imageSrc}
                    alt={features[1].title}
                    width={475}
                    height={475}
                    className="absolute -bottom-2 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row mb-24 bg-white shadow-custom-white">
              <div className="px-4">
                <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-rubik font-semibold uppercase">
                  {features[2].title}
                </h1>
                <p className="text-xl font-rubik font-normal text-center lg:text-left lg:max-w-lg text-slate-600 lg:leading-relaxed lg:pt-4 lg:pe-20">
                  {features[2].description}
                </p>
              </div>
              <div className="border border-indigo-200 rounded-xl p-2 bg-gradient-to-tl  from-indigo-200 to-indigo-400 mt-8 lg:m-0">
                <div className="relative w-80 h-80 lg:w-128 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-200 to-yellow-100">
                  <Image
                    src={features[2].imageSrc}
                    alt={features[2].title}
                    width={450}
                    height={450}
                    className="absolute -bottom-12 left-8 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center mb-24 bg-white shadow-custom-white">
              <div className="border border-green-200 rounded-xl p-2 bg-gradient-to-br from-slate-950 to-slate-600">
                <div className="relative w-128 h-96 overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700">
                  <Image
                    src={features[3].imageSrc}
                    alt={features[3].title}
                    width={475}
                    height={475}
                    className="absolute -bottom-4 left-5 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-right text-4xl font-rubik font-semibold uppercase">
                  {features[3].title}
                </h1>
                <p className="text-right text-xl font-rubik font-normal max-w-lg text-slate-600 pt-4 ps-20">
                  {features[3].description}
                </p>
              </div>
            </div>
            <div className="flex lg:hidden flex-col lg:flex-row justify-center items-center mb-24 bg-white rounded-xl shadow-custom-white">
              <div className="px-4">
                <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-rubik font-semibold uppercase">
                  {features[3].title}
                </h1>
                <p className="text-xl font-rubik font-normal text-center lg:text-left lg:max-w-lg text-slate-600 lg:leading-relaxed lg:pt-4 lg:pe-20">
                  {features[3].description}
                </p>
              </div>
              <div className="border border-green-200 rounded-xl p-2 bg-gradient-to-br from-stone-700 to-neutral-400 mt-8 lg:m-0">
                <div className="relative w-80 h-64 lg:w-128 lg:h-96 overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-600 to-neutral-300">
                  <Image
                    src={features[3].imageSrc}
                    alt={features[3].title}
                    width={475}
                    height={475}
                    className="absolute -bottom-2 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
