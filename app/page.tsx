"use client";

import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="-mt-27">
        <Hero />
        </div>
        <section><AboutSection /></section>
      
    </div>
  );
}