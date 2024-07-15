"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import { HeroHeaderSmooth } from "./hero-header";
import SparklesText from "./sparkles-text";
import { IconBrandAppleFilled, IconBrandGooglePlay } from "@tabler/icons-react";
import Image from "next/image";

export const HeroParallax = ({
  screens,
}: {
  screens: {
    id: number;
    thumbnail: string;
  }[];
}) => {
  const firstRow = screens.slice(0, 10);
  const secondRow = screens.slice(10, 20);
  const thirdRow = screens.slice(20, 30);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.05, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-20">
          {firstRow.map((screen) => (
            <ProductCard
              screen={screen}
              translate={translateX}
              key={screen.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((screen) => (
            <ProductCard
              screen={screen}
              translate={translateXReverse}
              key={screen.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((screen) => (
            <ProductCard
              screen={screen}
              translate={translateX}
              key={screen.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export function Header() {
  const words = [
    {
      text: "Stay",
    },
    {
      text: "informed",
    },
    {
      text: "in",
    },
    {
      text: "under",
    },
    {
      text: "60 words",
      className: "text-red-500",
    },
    {
      text: "with",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 text-xl text-center font-normal">
        We understand you don’t have time to go through long news articles
        everyday.
        <br /> So we cut the clutter and deliver them, in under 60-word shorts.
        Short news for the mobile generation.
      </p>
      <HeroHeaderSmooth words={words} />
      <SparklesText className="text-red-500 mb-12" text="SNAPNEWS" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href="/coming-soon"
          className="flex rounded-md bg-black border border-transparent text-white px-4 py-2 items-center"
        >
          <IconBrandAppleFilled className="size-11 me-2" />
          <div className="flex flex-col px-1">
            <span className="text-xs pb-0">Coming soon on</span>
            <span className="text-xl">App Store</span>
          </div>
        </Link>
        <Link
          href="/coming-soon"
          className="flex rounded-md bg-black border border-transparent text-white px-4 py-2 items-center"
        >
          <IconBrandGooglePlay className="size-11 me-2" />
          <div className="flex flex-col px-1">
            <span className="text-xs pb-0">Coming soon on</span>
            <span className="text-xl">Play Store</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export const ProductCard = ({
  screen,
  translate,
}: {
  screen: {
    id: number;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={screen.id}
      className="group/product h-96 w-[11.5rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl ">
        <Image
          src={screen.thumbnail}
          height="960"
          width="450"
          className="object-cover object-left-top absolute h-full  inset-0"
          alt="Snapnews Screen"
        />
      </div>
      
    </motion.div>
  );
};
