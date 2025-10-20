import React from "react";
import CardTemp from "../ui/CardTemp";

const data = [
  {
    id: 1,
    head: "Facilities Management",
    services: [
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
    ],
  },
  {
    id: 2,
    head: "Business Setup & Visa Works",
    services: [
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
    ],
  },
  {
    id: 3,
    head: "Tours & Travels",
    services: [
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
    ],
  },
];

const ServiceSect = () => {
  return (
    <div className="container max-w-7xl space-y-8 mx-auto flex flex-col w-fulljustify-center">
      {data.map((item) => (
        <div key={item.id}>
          <h1  className="text-center text-black font-semibold text-5xl m-8 ">
            {item.head}
          </h1>

          <div className="flex flex-wrap gap-16 justify-center">
            {item.services.map((service)=>(
                <CardTemp {...service} show_button={false} key={service.key} 
            />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSect;
