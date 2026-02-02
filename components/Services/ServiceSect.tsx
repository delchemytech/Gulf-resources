import React from "react";
import CardTemp from "../ui/CardTemp";

const data = [
  {
    id: 1,
    head: "Facilities Management",
    services: [
      {
        key: 11,
        ImageURL: "/webp/company-business.webp",
        title: "Facilities Management Services",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
      {
        key: 12,
        ImageURL: "/webp/company-business.webp",
        title: "Oil & Gas-Onshore & Offshore Operation",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
      {
        key: 13,
        ImageURL: "/webp/building_maintenance.webp",
        title: "Buildings Maintenance",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
      },
      {
        key: 14,
        ImageURL: "/webp/manpower_resources.webp",
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
        ImageURL: "/webp/company-business.webp",
        title: "Visa Processing",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
     
      },
      {
        key: 22,
        ImageURL: "/webp/govt_services.webp",
        title: "Govt. Entity Services",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
     
      },
      {
        key: 23,
        ImageURL: "/webp/legal_typing.webp",
        title: "Legal Typing",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
     
      },
      {
        key: 24,
        ImageURL: "/webp/document_clearance.webp",
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
        ImageURL: "/webp/company-business.webp",
        title: "Visa Assistance",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
     
      },
      {
        key: 32,
        ImageURL: "/webp/company-business.webp",
        title: "Flight Booking",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
     
      },
      {
        key: 33,
        ImageURL: "/webp/hotel_reservation.webp",
        title: "Hotel Reservations",
        desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
     
      },
      {
        key: 34,
        ImageURL: "/webp/tour_packages.webp",
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
