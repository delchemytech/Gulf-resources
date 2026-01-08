import React from "react";
import RedParallelograms from "./Icons/RedParallelograms";
import PrimaryButton from "./ui/PrimaryButton";

const ServiceStrip = () => {
  return (
    <div className="w-screen h-full py-12 bg-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full"></div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-white/5 rounded-full"></div>
      
      <div className="container mx-auto md:max-w-7xl flex flex-col lg:flex-row items-center justify-between relative z-10 gap-16">
        <div className=" py-2 sm:py-8 md:py-12 flex flex-col md:mx-2 md-mx-0  ">
          <div className="hidden md:flex items-center  mb-4 ">
            {/* Small Red Bars (Matching the design) */}
            <RedParallelograms className={`w-8 h-4 text-white`} />
            <p className="text-sm font-bold tracking-wider uppercase text-white">
              About Our Company
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl text-center md:text-start px-16  md:w-5/6 font-bold text-white mb-6 leading-tight">
            Get Any Kind Of Consultancy Service Feel Free To Contact Us.
          </h2>
        </div>
        <div className="mr-0 md:mr-4">
          <PrimaryButton buttonText="Get Our Service" buttonHref="/services" />
        </div>
      </div>
    </div>
  );
};

export default ServiceStrip;
