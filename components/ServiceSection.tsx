import React from "react";
import HeaderWithDescription from "./ui/HeaderWithDescription";
import CardTemp from "./ui/CardTemp";
import PrimaryButton from "./ui/PrimaryButton";

const data = [
  {
    id: 1,
    head: "Facilities Management",
    services: [
      {
        key: 11,
        ImageURL: "/webp/facility_management.webp",
        title: "Facilities Management Services",
      },
      {
        key: 12,
        ImageURL: "/webp/oil_gas.webp",
        title: "Oil & Gas-Onshore & Offshore Operation",
      },
    ],
  },
  {
    id: 2,
    head: "Business Setup & Visa Works",
    services: [
      {
        key: 21,
        ImageURL: "/webp/visa_processing.webp",
        title: "Visa Processing",
      },
      {
        key: 22,
        ImageURL: "/webp/business_typing.webp",
        title: "Govt. Entity Services",
      },
    ],
  },
  {
    id: 3,
    head: "Tours & Travels",
    services: [
      {
        key: 31,
        ImageURL: "/webp/visa_processing.webp",
        title: "Visa Assistance",
      },
      {
        key: 32,
        ImageURL: "/webp/flight_booking.webp",
        title: "Flight Booking",
      },
    ],
  },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-8">
      <HeaderWithDescription
        tagline="Our Services"
        title="Service We Provide"
        bodyText=""
      />
      {data.map((item) => (
        <div key={item.id} className="flex flex-col mb-16">
          <h2 className="text-xl md:text-5xl text-center font-extrabold text-gray-900 mb-6 leading-tight">
            {item.head}
          </h2>
          <div className="flex  justify-center items-center gap-4  ">
            {item.services.map((serivce) => (
              <div  key={serivce.key} className="flex justify-center ">
                <CardTemp
                 
                  ImageURL={serivce.ImageURL}
                  title={serivce.title}
                />
              </div>
            ))}

          </div>
          <div className="flex justify-center mt-8">
            <PrimaryButton
              buttonText="View all services"
              buttonHref="/services"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
