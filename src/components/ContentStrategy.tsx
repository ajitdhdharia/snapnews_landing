"use strict";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ContentStrategy() {
  const summary = [
    {
      imageURl: "/images/sources_news_feed.svg",
      title: "Sources",
      description:
        "Snapnews aggregates news through feeds from a variety of reputable providers.",
        style: "py-6"
    },
    {
      imageURl: "/images/cloud_storage.svg",
      title: "Storage",
      description:
        "News data is securely stored in a cloud database for a period of 1 week, enabling efficient access and management.",
        style: ""
    },
    {
      imageURl: "/images/LLM.svg",
      title: "Summarization",
      description:
        "Advanced LLM (Large Language Model) technology generates 60- word summaries of news articles.",
        style: "py-8"
    },
    {
      imageURl: "/images/secure.svg",
      title: "Attribution",
      description:
        "Summaries include critical information such as the publishing company, publication date, and author to maintain credibility.",
        style: ""
    },
    {
      imageURl: "/images/summary_image.svg",
      title: "Visuals",
      description:
        "Summaries are paired with relevant images to enhance readability and engagement.",
        style: ""
    },
    {
      imageURl: "/images/filter.svg",
      title: "Customization",
      description:
        "Users can select from seven categories to filter news according to their interests, ensuring a personalized news feed.",
        style: ""
    },
  ];

  return (
    <div className="w-full rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden py-20">
      <InfiniteMovingCards items={summary} direction="right" speed="slow" />
    </div>
  );
}
