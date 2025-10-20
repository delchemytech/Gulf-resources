import CompaniesService from "@/components/Companies/CompaniesService";
import About from "@/components/Companies/about";
import MissionVision from "@/components/MissionVision";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const pageHeaderData = {
  tagline: "OUR COMPANIES",
  bodyText:
    "Comprehensive facility solutions that keep your business operations running smoothly and efficiently",
  title: "Facilities Management",
};


const AboutCompany = {
  imageURL: "/images/companies/facility/about.png",
  alt: "About us",
  headerData: {
    title: "Gulf Resources Facilities Management",
    tagline: "ABOUT OUR COMPANY",
    bodyText: `Gulf Track Facilities Management is a leading provider of comprehensive facility solutions across the Gulf region. With over a decade of experience, we specialize in maintaining, securing, and optimizing business premises to ensure peak operational efficiency.
    Our team of certified professionals delivers reliable, cost-effective solutions tailored to meet the unique needs of each client. From routine maintenance to specialized services, we handle every aspect of facility management with precision and care.`,
  },
  buttonText: "CONTACT WITH US",
  buttonHref: "/contact-us",
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
  {
    id: "3",
    title: "Vision",
    icon: "/vision.svg",
    alt_text: "Mission Icon",
    desc: "To deliver exceptional business solutions through our specialized companies, enabling our clients to focus on their core business while we handle their operational needs with professionalism and expertise.",
  },
];

const services = [
      {
        key: 11,
        ImageURL: "/company-business.png",
        title: "Facilities Management Services",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
      {
        key: 12,
        ImageURL: "/company-business.png",
        title: "Oil & Gas-Onshore & Offshore Operation",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
      {
        key: 13,
        ImageURL: "/company-business.png",
        title: "Buildings Maintenance",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
      {
        key: 14,
        ImageURL: "/company-business.png",
        title: "Manpower Resourses",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
    ]





const page = () => {
  return (
    <div className="space-y-16 bg-white">
      <PageHeader {...pageHeaderData} />
      <About {...AboutCompany} />
      <MissionVision data = {mission_data}/>
      <WhyChooseUs/>
      <CompaniesService Services={services}/>
    </div>
  );
};

export default page;
