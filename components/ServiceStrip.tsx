import React from "react";
import RedParallelograms from "./Icons/RedParallelograms";
import PrimaryButton from "./ui/PrimaryButton";

const ServiceStrip = () => {
  return (
    <div className="w-screen h-full py-12 bg-red-800 flex gap-16">
      <div className="container mx-auto md:max-w-7xl  flex flex-col lg:flex-row items-center justify-between">
        <div className=" py-2 sm:py-8 md:py-12 flex flex-col md:mx-2 md-mx-0  ">
          <div className="hidden md:flex items-center  mb-4 ">
            {/* Small Red Bars (Matching the design) */}
            <RedParallelograms className={`w-8 h-4 text-white`} />
            <p className="text-base font-semibold tracking-wider uppercase text-white">
              About Our Company
            </p>
          </div>

          <h2 className="text-2xl md:text-5xl text-center md:text-start px-16  md:w-5/6 font-semibold text-white mb-6 leading-tight">
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
