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
  bodyText: `Gulf Resources Facilities Management L.L.C and Gulf Track Business Setup Services are recognized providers of professional manpower, recruitment, business setup, and corporate support services across the UAE and GCC region.

Established in 2016, we have built a reputation for reliability, integrity, and excellence, delivering efficient and cost-effective solutions tailored to meet our clients' business needs.

With our head office in Abu Dhabi – Musaffah 37 and an international branch in Kerala, India, we proudly serve local and overseas clients with seamless operational support.`,
};


const mission_data = [
  {
    id: "1",
    title: "Mission",
    icon: "/mission.svg",
    alt_text: "Mission Icon",
    desc: "To deliver exceptional business solutions through our specialized companies, enabling our clients to focus on their core business while we handle their operational needs with professionalism and expertise.",
  },
  {
    id: "2",
    title: "Vision",
    icon: "/vision.svg",
    alt_text: "Mission Icon",
    desc: "To deliver exceptional business solutions through our specialized companies, enabling our clients to focus on their core business while we handle their operational needs with professionalism and expertise.",
  },
  
];

  return (
    <div className="bg-white pb-16">
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
      <MissionVision data= {mission_data}/>
      <CompaniesHome />
      <WhyChooseUs />
      <MovingClients />

      <ServiceStrip />
      {/* <ServiceSection /> */}
      
    </div>
  );
}
