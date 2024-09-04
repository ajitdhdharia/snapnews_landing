"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/components/Home";
import { Feature } from "@/components/Feature";
import { About } from "@/components/About";
import Team from "@/components/Team";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-w-screen bg-white bg-grid-black/[0.02]">
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Team />
      <Footer />
    </main>
  );
}
