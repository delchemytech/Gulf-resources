import React from 'react'
import CompanyContactsCard from './CompanyContactsCard'
import { CometCard } from '../ui/comet-card';
import CompanyCardNew from '../ui/CompanyCardNew';

const data = [
    {
      id: "1",
      imageUrl: "/company-facility.png",
      imageAlt: "Construction Worker",
      title: "Gulf Resources Facility Management",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      companyLink: "/about",
    },
    {
      id: "2",
      imageUrl: "/company-business.png",
      imageAlt: "Construction Worker",
      title: "Gulf Track Business Setup & Visa Works",
      description:
      "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
            companyLink: "/about",
    },
    {
      id: "3",
      imageUrl: "/company-tours.png",
      imageAlt: "Construction Worker",
      title: "Gulf Track Tours & Travels",
      description:
      "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      companyLink: "/about",
    },
  ];

const CompanyContacts = () => {
  return (
<div className="flex flex-col justify-center items-center">
      <div className="justify-center text-2xl text-black md:text-5xl font-extrabold">
        Our Companies
      </div>
      <div className="flex max-w-9xl flex-wrap justify-center my-10 items-center mx-auto px-4 md:px-8 gap-6 md:gap-12">
        {data.map((item) => (
          <div key={item.id} className="max-w-sm">
            <CompanyContactsCard key={item.id} {...item}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyContacts
