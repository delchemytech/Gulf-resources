import CompaniesService from "@/components/Companies/CompaniesService";
import About from "@/components/Companies/about";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const pageHeaderData = {
  tagline: "OUR COMPANIES",
  bodyText:
    "Your gateway to exceptional travel experiences and comprehensive travel solutions",
  title: "Tours & Travels",
};


const AboutCompany = {
  imageURL: "/images/companies/travel/about.png",
  alt: "About us",
  headerData: {
    title: "Gulf Track Tours & Travels",
    tagline: "ABOUT OUR COMPANY",
    bodyText: `Gulf Track Tours & Travels is your trusted partner for all travel needs, from business trips to leisure vacations. With extensive experience in the travel industry and deep knowledge of global destinations, we create customized travel solutions that exceed expectations.
    Our comprehensive services include visa assistance, flight and hotel bookings, tour packages, and travel support. Whether you're planning a corporate retreat, family vacation, or solo adventure, we handle every detail to ensure a seamless and memorable travel experience.`,
  },
  buttonText: "CONTACT WITH US",
  buttonHref: "/contact-us",
};



const services =  [
  {
    key: 31,
    ImageURL: "/company-business.png",
    title: "Visa Assistance",
    desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
 
  },
  {
    key: 32,
    ImageURL: "/company-business.png",
    title: "Flight Booking",
    desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
 
  },
  {
    key: 33,
    ImageURL: "/company-business.png",
    title: "Hotel Reservations",
    desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
 
  },
  {
    key: 34,
    ImageURL: "/company-business.png",
    title: "Tour Packages",
    desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
 
  },
]

const page = () => {
  return (
    <div className="space-y-16 pb-16 bg-white">
      <PageHeader {...pageHeaderData} />
      <About {...AboutCompany} />
      <CompaniesService Services={services}/>
    </div>
  );
};

export default page;
