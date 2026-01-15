import CompaniesService from "@/components/Companies/CompaniesService";
import About from "@/components/Companies/about";
import WhyClientsChooseUs from "@/components/Companies/WhyClientsChooseUs";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/ui/PageHeader";
import { Target, Eye } from "lucide-react";
import React from "react";

const pageHeaderData = {
  tagline: "OUR COMPANIES",
  bodyText:
    "Providing reliable travel planning, visa assistance, and documentation support for individuals and families travelling abroad, with a strong focus on Gulf destinations.",
  title: "Travel & Visa Services for Overseas Travel",
};

const AboutCompany = {
  imageURL: "/travel_about.png",
  alt: "About Gulf Track Tours & Travels",
  headerData: {
    title: "Gulf Track Tours & Travels",
    tagline: "COMPANY OVERVIEW",
    bodyText: `Gulf Track Tours & Travels provides reliable travel planning and visa assistance for individuals and families travelling abroad. We support clients with flight bookings, visit visas, job visa assistance, and certificate attestation services through clear guidance and professional support.`,
  },
  buttonText: "SPEAK TO OUR TRAVEL TEAM",
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
    key: 31,
    ImageURL: "/flight_booking.png",
    title: "Flight Ticket Booking",
    desc: "Domestic & International air ticket reservations",
    points: [
      "Best fare options and flexible itineraries",
      "Special group booking deals",
      "24/7 customer support for schedule changes and travel queries",
    ],
  },
  {
    key: 32,
    ImageURL: "/visa_processing2.png",
    title: "Visit Visa Services",
    desc: "Let us handle your visit visa process with professionalism and speed",
    points: [
      "Tourist visit visas for major destinations",
      "Complete documentation guidance",
      "Visa extensions & re-entry assistance",
    ],
  },
  {
    key: 33,
    ImageURL: "/visa_processing.png",
    title: "Job Visa Assistance",
    desc: "Planning to work abroad? We assist in:",
    points: [
      "Job visa processing & documentation",
      "Employer coordination",
      "Work permit guidance for Gulf countries",
    ],
  },
  {
    key: 34,
    ImageURL: "/saudi_visa.png",
    title: "Saudi Visa Stamping",
    desc: "Specialized support for Saudi Arabia visa stamping services",
    points: [
      "Visa submission and follow-up",
      "Appointment scheduling",
      "Fast and reliable processing",
    ],
  },
  {
    key: 35,
    ImageURL: "/certificate_attestation.png",
    title: "Certificate Attestation",
    desc: "We provide attestation services for:",
    points: [
      "Educational certificates",
      "Employment and experience certificates",
      "Personal documents",
      "Attestations required for Gulf employment and immigration",
    ],
  },
];

const whyChooseUsReasons = [
  "Expert visa documentation support",
  "Competitive pricing",
  "Fast processing times",
  "Friendly and professional staff",
  "Reliable after-sales customer service",
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