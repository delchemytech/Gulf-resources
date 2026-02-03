import type { Metadata } from "next";
import CompaniesService from "@/components/Companies/CompaniesService";
import About from "@/components/Companies/about";
import AreasOfExpertise from "@/components/Companies/AreasOfExpertise";
import ManpowerResources from "@/components/Companies/ManpowerResources";
import WhyClientsChooseUs from "@/components/Companies/WhyClientsChooseUs";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/ui/PageHeader";
import { Target, Eye } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Gulf Resources Facilities Management - Industrial Support Services",
  description: "Gulf Resources delivers comprehensive facilities management, manpower supply, building maintenance, and oil & gas support services for commercial and industrial operations across UAE.",
  keywords: [
    "Gulf Resources facilities management",
    "facilities management UAE",
    "manpower supply UAE",
    "building maintenance UAE",
    "oil gas support services",
    "industrial operations UAE",
    "commercial facilities management",
    "MEP maintenance UAE"
  ],
  openGraph: {
    title: "Gulf Resources Facilities Management - Professional Industrial Support",
    description: "Comprehensive facilities management, manpower supply, building maintenance, and oil & gas support services for commercial and industrial operations.",
    images: ['/webp/images/companies/facilities_hero.webp'],
  },
};

const pageHeaderData = {
  tagline: "OUR COMPANIES",
  bodyText:
    "Delivering facilities management, manpower supply, building maintenance, and oil & gas support services for commercial and industrial operations across the UAE.",
  title: "Facilities Management & Industrial Support Services",
  bgImage: "/webp/images/companies/facilities_hero.webp",
  mobileBgImage: "/webp/images/companies/facilities_hero_mobile.webp",
};

const AboutCompany = {
  imageURL: "/webp/facility_about.webp",
  alt: "About Gulf Resources Facilities Management",
  headerData: {
    title: "Gulf Resources Facilities Management",
    tagline: "COMPANY OVERVIEW",
    bodyText: `Gulf Resources Facilities Management provides professional facilities management and industrial support services for corporate and industrial clients. Our services are designed to support safe, efficient, and reliable operations through structured processes and skilled manpower deployment.`,
  },
  buttonText: "CONTACT FACILITIES TEAM",
  buttonHref: "/contact-us",
};

const mission_data = [
  {
    id: "1",
    title: "Mission",
    lucideIcon: Target,
    desc: "Our Mission is to maintain the highest levels of Professionalism, Integrity, Honesty and Fairness in our relationships with our Customers, Suppliers, Subcontractors, and Professional Associates.",
  },
  {
    id: "2",
    title: "Vision",
    lucideIcon: Eye,
    desc: "To provide the best service to our clients and thus by achieving extraordinary results aiming for not only the organizational growth but also to contribute to the social & economic growth of the United Arab Emirates.",
  },
];

const services = [
  {
    key: 11,
    ImageURL: "/webp/facility_management.webp",
    title: "Facilities Management",
    desc: "We deliver integrated facilities management solutions covering daily operations, preventive maintenance, and site coordination. Our services support the smooth functioning of commercial, industrial, and institutional facilities by ensuring infrastructure, utilities, and essential services operate efficiently and in compliance with operational requirements.",
  },
  {
    key: 12,
    ImageURL: "/webp/manpower_resources.webp",
    title: "Manpower Supply",
    desc: "We supply skilled and unskilled manpower to support construction, maintenance, and industrial projects. Our manpower solutions are structured to meet project timelines, workforce requirements, and operational demands, including rapid deployment for short-term and long-term assignments.",
  },
  {
    key: 13,
    ImageURL: "/webp/building_maintenance.webp",
    title: "Building Maintenance & MEP",
    desc: "Our building maintenance services include preventive and corrective maintenance of mechanical, electrical, and plumbing systems. We focus on minimizing downtime, extending asset life, and ensuring consistent performance of building infrastructure across operational environments.",
  },
  {
    key: 14,
    ImageURL: "/webp/oil_gas.webp",
    title: "Oil & Gas – Onshore & Offshore Operations",
    desc: "We provide operational and manpower support services for oil and gas projects in both onshore and offshore environments. Our teams support project execution by supplying trained personnel and operational assistance aligned with site-specific requirements and safety standards.",
  },
];

const whyChooseUsReasons = [
  "Structured service delivery approach",
  "Experienced operational and technical teams",
  "Reliable manpower availability",
  "Focus on safety, quality, and efficiency",
  "Professional and timely execution",
];

const page = () => {
  return (
    <div className="space-y-16 pb-16 bg-white">
      <PageHeader {...pageHeaderData} />
      <About {...AboutCompany} />
      <MissionVision data={mission_data} />
      <CompaniesService Services={services} />
      <ManpowerResources />
      <AreasOfExpertise />
      <WhyClientsChooseUs reasons={whyChooseUsReasons} />
    </div>
  );
};

export default page;
