"use client";
import React from "react";
import { cn } from "@/utils/cn";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div
        className={cn(
          "relative flex justify-center items-center bg-white w-full group border-t border-gray-100"
        )}
      >
        <div className="absolute inset-0 bg-dot-thick-neutral-100 pointer-events-none" />
        <div className="pointer-events-none bg-dot-thick-indigo-200 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="py-4 mx-auto grid grid-cols-1 z-20">
          <span className="text-md self-center text-gray-600 tracking-tight">
            ©{year} Snapnews. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
