"use client";
import React from "react";
import ShineBorder from "./ui/shine-border";
export const Feature = ({
  features,
}: {
  features: {
    title: string;
    description: string;
    content: React.ReactNode;
  }[];
}) => {
  return (
    <>
      {features.map((feature) => {
        return (
          <>
            <div className="flex justify-between items-center text-slate-800 py-60">
              <div className="pe-20">
                <h1 className="text-5xl font-rubik font-semibold">
                  {feature.title}
                </h1>
                <p className="text-2xl font-rubik font-medium max-w-lg text-slate-500 pt-4">
                  {feature.description}
                </p>
              </div>

              <div className="scale-150 ps-32">
                <ShineBorder
                  borderRadius={12}
                  borderWidth={2}
                  color={["#1e53c7", "#218fde"]}
                >
                  <div className="p-4 border rounded-xl bg-slate-900 border-neutral-200 px-4">
                    <div className="px-4 rounded-xl bg-slate-800">
                      {feature.content}
                    </div>
                  </div>
                </ShineBorder>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
