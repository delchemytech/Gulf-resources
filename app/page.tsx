"use client";

import AboutSection from "@/components/AboutSection";
import CompaniesHome from "@/components/CompaniesHome";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-white">
       <div className="relative">
        <Hero />
      </div>
      <AboutSection />
      <MissionVision />
        <CompaniesHome />
     <WhyChooseUs/>



    </div>
  );
}
