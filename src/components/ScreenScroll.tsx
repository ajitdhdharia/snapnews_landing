"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";

interface Item {
  src: string;
}

let notifications = [
  {
    src: "/images/phones/phone1.png",
  },
  {
    src: "/images/phones/phone2.png",
  },
  {
    src: "/images/phones/phone3.png",
  },
  {
    src: "/images/phones/phone4.png",
  },
  {
    src: "/images/phones/phone3.png",
  },
  {
    src: "/images/phones/phone4.png",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

export function ScreenScroll({ className }: { className?: string }) {
  return (
    <div className="w-[410px] h-[300px] flex justify-center">
      <div
        className={cn(
          "relative flex w-full flex-col overflow-hidden",
          className
        )}
      >
        <div className="absolute top-3 scale-90">
          <Image
            src="/images/scroll_1.svg"
            alt="phone screen"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute top-3 right-0 scale-90">
          <Image
            src="/images/scroll_2.webp"
            alt="phone screen"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
