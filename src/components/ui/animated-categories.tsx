"use client";
import React from "react";
import Image from "next/image";

export function AnimatedCategories() {
  return (
    <div className="py-4">
      <div className="rounded-xl bg-white p-6">
        <Image src="/images/categories.png" alt="categories" width={375} height={375}/>
      </div>
    </div>
  );
}
