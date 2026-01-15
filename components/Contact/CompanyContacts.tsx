import React from 'react'
import CompanyContactsCard from './CompanyContactsCard'
import { CometCard } from '../ui/comet-card';
import CompanyCardNew from '../ui/CompanyCardNew';
import { Building2, FileCheck, Plane } from "lucide-react";

const data = [
    {
      id: "1",
      imageUrl: "/facility_management.png",
      imageAlt: "Construction Worker",
      title: "Gulf Resources Facility Management",
      description:
        "Providing top-tier facilities management, manpower supply, and building maintenance services across the UAE.",
      companyLink: "/about",
      Icon: Building2,
      phone: "+971 2 517 6889",
      phone2: "+971 50 134 4537",
      email: "info@gulfresources.ae",
      address: "Office 4, Musaffah 37, Opp. Gift Action, Abu Dhabi, UAE",
    },
    {
      id: "2",
      imageUrl: "/business_typing.png",
      imageAlt: "Construction Worker",
      title: "Gulf Track Business Setup & Visa Works",
      description:
      "Expert assistance with business setup, visa processing, and government documentation services.",
            companyLink: "/about",
            Icon: FileCheck,
      phone: "+971 2 517 6889",
      phone2: "+971 50 134 4537",
      email: "gulftracktypingservices@gmail.com",
      address: "Office 4, Musaffah 37, Opp. Gift Action, Abu Dhabi, UAE",
    },
    {
      id: "3",
      imageUrl: "/tours_travels.png",
      imageAlt: "Construction Worker",
      title: "Gulf Track Tours & Travels",
      description:
      "Your trusted partner for travel planning, flight bookings, and visa assistance for global destinations.",
      companyLink: "/about",
      Icon: Plane,
      phone: "+91 9037924650",
      phone2: "",
      email: "Gulftravptb@gmail.com",
      address: " office 1-3, civil station road, Pattambi, Kerala, India",
    },
  ];

const CompanyContacts = () => {
  return (
<div className="flex flex-col justify-center items-center">
      <div className="justify-center text-2xl text-black md:text-5xl font-extrabold">
        Our Companies
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto px-4 md:px-8 my-10 items-stretch">
        {data.map((item) => (
          <div key={item.id} className="w-full h-full">
            <CompanyContactsCard key={item.id} {...item}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyContacts
