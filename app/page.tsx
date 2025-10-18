"use client";

import AboutSection from "@/components/AboutSection";
import CompaniesHome from "@/components/CompaniesHome";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import { MovingClients } from "@/components/MovingClients";
import ServiceSection from "@/components/ServiceSection";
import ServiceStrip from "@/components/ServiceStrip";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {

const headerData = {
  title: "Gulf Resources",
  tagline: "ABOUT OUR COMPANY",
  bodyText: `Appropriately empower dynamic leadership skills after business portals.
            Globally myocardinate interactive supply chains with distinctive quality
            vectors.`,
};

  return (
    <div className="bg-white">
      <div className="relative">
        <Hero />
      </div>
      <AboutSection
        imageURL={"/workers.png"}
        alt={"Two workers smiling"}
        headerData={headerData}
        buttonText={"CONTACT WITH US"}
        buttonHref={"/about"}
      />
      <MissionVision />
      <CompaniesHome />
      <WhyChooseUs />
      <MovingClients />

      <ServiceStrip />
      {/* <ServiceSection /> */}
      
    </div>
  );
}
