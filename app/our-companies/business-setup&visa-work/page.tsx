import CompaniesService from "@/components/Companies/CompaniesService";
import About from "@/components/Companies/about";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const pageHeaderData = {
  tagline: "OUR COMPANIES",
  bodyText:
    "Your trusted partner for all documentation and legal typing needs",
  title: "Business Setup & Visa Works",
};



const AboutCompany = {
  imageURL: "/images/companies/visa/about.png",
  alt: "About us",
  headerData: {
    title: "Gulf Track Business Setup & Visa Works",
    tagline: "ABOUT OUR COMPANY",
    bodyText: `Gulf Track Business Setup & Visa Works specializes in professional documentation, legal typing, translation, and government liaison services. With years of experience in the Gulf region, we understand the intricacies of local regulations and documentation requirements.
    Our expert team provides accurate, efficient, and reliable services that help businesses and individuals navigate complex documentation processes. From legal typing to visa processing, we ensure all your paperwork is handled with precision and care.`,
  },
  buttonText: "CONTACT WITH US",
  buttonHref: "/contact-us",
};

const services =  [
    {
      key: 21,
      ImageURL: "/company-business.png",
      title: "Visa Processing",
      desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
   
    },
    {
      key: 22,
      ImageURL: "/company-business.png",
      title: "Govt. Entity Services",
      desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
   
    },
    {
      key: 23,
      ImageURL: "/company-business.png",
      title: "Legal Typing",
      desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
   
    },
    {
      key: 24,
      ImageURL: "/company-business.png",
      title: "Document Clearance",
      desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
   
    },
  ]


const page = () => {
  return (
    <div className="space-y-16 pb-16 bg-white">
      <PageHeader {...pageHeaderData} />
      <About {...AboutCompany} />
      <CompaniesService Services={services}/>
      <p>Below section will be updated once we get the data</p>
      <WhyChooseUs/>

      
    </div>
    
  );
};

export default page;
