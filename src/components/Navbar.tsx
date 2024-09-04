"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export default function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Team",
      link: "#team",
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav className="shadow-xl" navItems={navItems} />
    </div>
  );
}
