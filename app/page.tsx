"use client";

import AboutSection from "@/components/AboutSection";
import CompaniesHome from "@/components/CompaniesHome";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import { CometCard } from "@/components/ui/comet-card";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="-mt-27">
        <Hero />
      </div>
      <section>
        <AboutSection />
      </section>
      <MissionVision />

      <CompaniesHome />
      <div>""</div>
    </div>
  );
}
