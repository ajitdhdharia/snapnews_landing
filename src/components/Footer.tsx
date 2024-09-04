"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerItems = [
    {
      name: "privacy",
      link: "/privacy-terms/privacy",
    },
    {
      name: "contact us",
      link: "mailto:business@snapnews.ai",
    },
  ];

  return (
    <>
      <div className="w-full grid place-items-center pt-8 pb-6 bg-white border-t">
        <div className="max-w-7xl grid grid-cols-1">
          <div className="">
            <div className="flex justify-center">
              <button className="flex text-sm font-medium relative border-neutral-200 text-black px-4 py-2 rounded-full">
                <img
                  alt="SnapNews Logo"
                  src="/logo.svg"
                  className="h-8 w-auto"
                />
                <p className="font-rubik pl-2 text-xl font-medium text-slate-700">
                  SnapNews
                </p>
              </button>
            </div>

            <div className="flex justify-center lg:pb-4">
              {footerItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-1 py-2 px-4 text-slate-700"
                  )}
                >
                  <span className="text-md font-rubik">{navItem.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-md text-gray-700 tracking-tight text-center border-t border-slate-200 py-2">
              ©{year} SnapNews. All rights reserved.
            </p>
            <div className="flex justify-center text-gray-600">
              <Link href="https://www.instagram.com/snapnews60/">
                <IconBrandInstagram className="size-10 pe-2" />
              </Link>

              <Link href="https://x.com/snapnews60">
                <IconBrandX className="size-10 px-2" />
              </Link>

              <Link href="https://www.linkedin.com/company/snapnews-ai/">
                <IconBrandLinkedin className="size-10 ps-2" />
              </Link>

              <Link href="https://www.facebook.com/snapnewsIn60/">
                <IconBrandFacebook className="size-10 px-2" />
              </Link>

              <Link href="https://www.youtube.com/@snapnews60">
                <IconBrandYoutube className="size-10 ps-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
