import React from "react";
import RedParallelograms from "./Icons/RedParallelograms";

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
        <div className="py-2 sm:py-8 md:py-12 flex flex-col md:mx-0">
          <div className="hidden items-center mb-4">
            {/* Small Red Bars (Matching the design) */}
            <RedParallelograms className="w-8 h-4 text-white mr-2" />
            <p className="text-sm font-bold tracking-wider uppercase text-white">
              About Our Company
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl text-start md:w-5/6 font-bold text-white mb-6 leading-tight">
            Looking for expert consultancy? Contact us today.
          </h2>
        </div>
        <div className="mr-0 md:mr-4">
          <a 
            href="/contact-us" 
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg inline-block whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceStrip;
