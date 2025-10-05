import React from "react";
import HeaderWithDescription from "./ui/HeaderWithDescription";
import CardTemp from "./ui/CardTemp";
import PrimaryButton from "./ui/PrimaryButton";

const ServiceSection = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-8">
      <HeaderWithDescription
        tagline="Our Services"
        title="Service We Provide"
        bodyText=""
      />
      <div className="flex flex-col mb-16">
        <h2 className="text-center text-5xl font-bold">
          Facilities Management
        </h2>
        <div className="grid grid-cols-2 justify-center items-center gap-8">
          <CardTemp ImageURL="/company-business.png" title="Facilities Management Services" />
          <CardTemp ImageURL="/company-business.png" title="Oil & Gas-Onshore & Offshore Operation" />
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            buttonText="View all services"
            buttonHref="/services"
          />
        </div>
      </div>

      <div className="flex flex-col mb-16">
        <h2 className="text-center text-5xl font-bold">
        Business Setup & Visa Works
        </h2>
        <div className="grid grid-cols-2 justify-center items-center gap-8">
          <CardTemp ImageURL="/company-business.png" title="Facilities Management Services" />
          <CardTemp ImageURL="/company-business.png" title="Oil & Gas-Onshore & Offshore Operation" />
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            buttonText="View all services"
            buttonHref="/services"
          />
        </div>
      </div>
      
      
      <div className="flex flex-col mb-16">
        <h2 className="text-center text-5xl font-bold">
        Tours & Travels
        </h2>
        <div className="grid grid-cols-2 justify-center items-center gap-8">
          <CardTemp ImageURL="/company-business.png" title="Facilities Management Services" />
          <CardTemp ImageURL="/company-business.png" title="Oil & Gas-Onshore & Offshore Operation" />
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            buttonText="View all services"
            buttonHref="/services"
          />
        </div>
      </div>
      


      
    </div>
  );
};

export default ServiceSection;
