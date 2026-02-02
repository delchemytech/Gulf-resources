import About from "@/components/Companies/about";
import CompaniesService from "@/components/Companies/CompaniesService";
import WhyClientsChooseUs from "@/components/Companies/WhyClientsChooseUs";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/ui/PageHeader";
import { Target, Eye } from "lucide-react";
import React from "react";

const pageHeaderData = {
  tagline: "OUR COMPANIES",
  bodyText:
    "Comprehensive typing, visa, business setup, insurance, and government documentation services delivered with accuracy, speed, and reliability.",
  title: "Typing & PRO Services in Abu Dhabi",
  bgImage: "/webp/images/companies/business_hero.webp",
  mobileBgImage: "/webp/images/companies/business_hero_mobile.webp",
};

const AboutCompany = {
  imageURL: "/webp/visa_about.webp",
  alt: "About Gulf Track Typing Services",
  headerData: {
    title: "Gulf Track Typing Services L.L.C",
    tagline: "COMPANY OVERVIEW",
    bodyText: `Gulf Track Typing Services L.L.C provides professional typing and PRO services to individuals and businesses in Abu Dhabi. We support clients with government documentation, visa processing, business setup, insurance, and compliance-related services through structured and efficient processes.`,
  },
  buttonText: "SPEAK TO OUR PRO TEAM",
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
    key: 1,
    ImageURL: "/webp/business_setup.webp",
    title: "Business Setup & Trade Licensing",
    desc: "End-to-end support for new business formation and license renewals",
    points: [
      "New Company Setup",
      "Trade License Renewal",
      "Documentation and applications handling",
      "Coordination with government departments",
    ],
  },
  {
    key: 2,
    ImageURL: "/webp/visa_services_family.webp",
    title: "Visa Services (Company & Family)",
    desc: "Complete assistance for company and family visa processing",
    points: [
      "Company Visa (New & Renewal)",
      "Family Visa Services",
      "New Born Visa",
      "Parents Visa",
    ],
  },
  {
    key: 3,
    ImageURL: "/webp/insurance_compliance.webp",
    title: "Insurance & Compliance Services",
    desc: "Support for mandatory and optional insurance requirements",
    points: [
      "Daman File Opening & Renewal",
      "Workmen Compensation Insurance",
      "ILOE Insurance",
      "Health & Property Insurance",
      "Flexi Insurance for Partners & Investors",
      "Third Party Liability Insurance",
    ],
  },
  {
    key: 4,
    ImageURL: "/webp/vehicle_services.webp",
    title: "Vehicle & Traffic Services",
    desc: "Assistance with vehicle-related government services",
    points: [
      "Vehicle Renewal",
      "Vehicle Fine Payments",
      "Vehicle Insurance",
    ],
  },
  {
    key: 5,
    ImageURL: "/webp/documentation_attestation.webp",
    title: "Documentation & Attestation Services",
    desc: "Professional handling of legal and personal documentation",
    points: [
      "Certificate Attestation (Educational, Marriage, Birth)",
      "Power of Attorney (POA – Same Day)",
      "Government submissions and attestations",
    ],
  },
  {
    key: 6,
    ImageURL: "/webp/saudi_expansion.webp",
    title: "Saudi Business Expansion Support",
    desc: "Documentation and coordination support for businesses planning expansion into Saudi Arabia",
    points: [
      "Business Setup – Saudi Arabia",
      "Saudi Branch Setup",
      "Documentation coordination",
    ],
  },
];

const whyChooseUsReasons = [
  "Experienced PRO professionals",
  "Clear and accurate documentation handling",
  "Timely processing and follow-up",
  "Support for both individuals and businesses",
  "Transparent service approach",
];

const page = () => {
  return (
    <div className="space-y-16 pb-16 bg-white">
      <PageHeader {...pageHeaderData} />
      <About {...AboutCompany} />
      <MissionVision data={mission_data} />
      <CompaniesService Services={services} />
      <WhyClientsChooseUs reasons={whyChooseUsReasons} showSafety={false} />
    </div>
  );
};

export default page;