import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroHeaderSmooth } from "./ui/hero-header";

import { IconBrandAppleFilled, IconBrandGooglePlay } from "@tabler/icons-react";

const Home = () => {
  const words = [
    {
      text: "Snapnews",
      className: "font-bold text-snapNewsColor-blue",
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full bg-gradient-radial-at-br from-sky-200 via-transparent to-transparent shadow-md z-10">
        <section
          id="home"
          className="max-w-lg sm:max-w-xl md:max-w-7xl flex flex-col lg:flex-row justify-between items-center lg:items-start md:pt-48 px-4 lg:px-0 overflow-hidden" //to-grid-black/[0.02]
        >
          <div className="flex items-start justify-center pt-36 md:pt-0 lg:pt-44 pb-12 lg:pb-28 sm:px-0">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <p className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rubik font-semibold uppercase">
                News simplified with
              </p>
              <HeroHeaderSmooth words={words} />
              <p className="max-w-2xl text-xl md:text-2xl font-light text-slate-800 lg:leading-relaxed text-center lg:text-left lg:pe-12 py-6 lg:py-0">
                Flip through sharp 60-word summaries that cut the fluff.
                Snapnews gets straight to the point, delivering the news you
                need, fast.
              </p>
              <div className="flex flex-row md:space-y-0 space-x-2 md:space-x-4 mt-12 lg:mt-6">
                <Link
                  href="/coming-soon"
                  className="flex rounded-md border border-transparent text-white px-4 py-2 items-center border-neutral-300 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md font-light bg-gradient-to-b from-[#464d55] to-[#25292e]"
                >
                  <IconBrandAppleFilled className="size-8 sm:size-9 lg:size-11" />
                  <div className="flex flex-col px-1">
                    <span className="text-xs pb-0 font-rubik">
                      Coming soon on
                    </span>
                    <span className="text-md lg:text-xl font-rubik">
                      App Store
                    </span>
                  </div>
                </Link>
                <Link
                  href="/coming-soon"
                  className="flex rounded-md border border-transparent text-white px-4 py-2 items-center border-neutral-300 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md font-light bg-gradient-to-b from-[#464d55] to-[#25292e]"
                >
                  <IconBrandGooglePlay className="size-8 sm:size-9 lg:size-11" />
                  <div className="flex flex-col px-1">
                    <span className="text-xs pb-0 font-rubik">
                      Coming soon on
                    </span>
                    <span className="text-md lg:text-xl font-rubik">
                      Play Store
                    </span>
                  </div>
                </Link>
              </div>
              <p className="mt-8 max-w-xl text-md md:text-lg font-light text-slate-800 lg:leading-relaxed text-center lg:text-left lg:pe-12 py-6 lg:py-0">
                Get in touch for any business inquiries.
              </p>
              <div className="mt-2">
                <Link
                  href="mailto:business@snapnews.ai"
                  className="flex rounded-md border border-transparent text-white shadow-2xl px-10 py-4 items-center border-neutral-300 text-sm hover:-translate-y-1 transform transition duration-200 font-light bg-gradient-to-b from-snapNewsColor-blue to-blue-500"
                >
                  <div className="flex flex-col">
                    <span className="text-lg pb-0 font-rubik font-normal">
                      Contact Us
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center border-t-2 border-r-2 border-l-2 border-snapNewsColor-blue border-dashed rounded-t-30 h-full w-60 lg:w-96">
            <div className="relative flex justify-center items-center h-96 w-56 lg:w-94">
              <Image
                height={350}
                width={350}
                src="/snapNewsHome.svg"
                alt="home screen"
                className="absolute top-4 object-cover rounded-3xl border-t-2 border-r-2 border-l-2 border-snapNewsColor-blue border-dashed"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
