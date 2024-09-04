import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import BackButton from "@/components/ui/back-button";

const Page = () => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col h-screen bg-white bg-grid-black/[0.02]">
      <div className="h-1/2 w-1/2 flex">
        <BackButton className="self-center" />
      </div>
      <h2 className="h-1/2 justify-self-start relative z-20 text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-sky-500 via-teal-500 to-cyan-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Coming Soon!!</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-sky-500 via-teal-500 to-cyan-500 py-4">
            <span className="">Coming Soon!!</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
};

export default Page;
