"use client";

import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="bg-white">
      
      <div className="-mt-27">
        <Hero />
        </div>
        <section><AboutSection /></section>
      
    </div>
  );
}