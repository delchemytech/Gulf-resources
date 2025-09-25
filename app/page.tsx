"use client";

import AboutSection from "@/components/AboutSection";
import CompaniesHome from "@/components/CompaniesHome";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="-mt-27">
        <Hero />
      </div>
        <AboutSection />
      <MissionVision />
      <CompaniesHome />
    </div>
  );
}
