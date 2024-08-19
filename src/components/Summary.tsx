import React from "react";
import { Compare } from "@/components/ui/compare";

export function Summary() {
  return (
    <div className="py-4">
      <Compare
        firstImage="/images/news-long.png"
        secondImage="/images/news-short.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-contain object-center"
        className="h-[350px] w-[400px]"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
