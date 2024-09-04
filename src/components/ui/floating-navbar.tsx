"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex items-center justify-between max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl fixed top-10 inset-x-0 mx-auto border border-transparent bg-slate-800 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] ps-2 pe-4 sm:px-8 sm:space-x-2 sm:py-2",
          className
        )}
      >
        <Link href="#home" className="relative flex text-sm font-medium border-neutral-200 text-white px-4 py-2 rounded-full">
          <img alt="SnapNews Logo" src="/logo.svg" className="h-8 w-auto" />
          <p className="font-rubik pl-2 text-xl font-medium hidden sm:block">SnapNews</p>
        </Link>
        <div className="flex text-white">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-1 py-2 px-2 md:px-4 hover:bg-gradient-to-b hover:from-slate-600 hover:to-slate-700 rounded-lg transition duration-300 ease-in-out"
              )}
            >
              <span className="text-sm sm:text-md font-rubik font-light">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
