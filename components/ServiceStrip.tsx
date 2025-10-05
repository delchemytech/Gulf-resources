import React from "react";
import RedParallelograms from "./Icons/RedParallelograms";
import PrimaryButton from "./ui/PrimaryButton";

const ServiceStrip = () => {
  return (
    <div className="w-screen h-96 bg-red-800 flex gap-16">
      <div className="container mx-auto max-w-7xl  flex  items-center justify-between">
        <div className=" py-8 sm:py-8 md:py-12 flex flex-col max-w-3xl">
          <div className="flex items-center  mb-4 ">
            {/* Small Red Bars (Matching the design) */}
            <RedParallelograms className={`w-8 h-4 text-white`} />
            <p className="text-base font-semibold tracking-wider uppercase text-white">
              About Our Company
            </p>
          </div>

          <h2 className="text-4xl   font-extrabold text-white mb-6 leading-tight">
            Get Any Kind Of Consultancy Service Feel Free To Contact Us.
          </h2>
        </div>
        <div>
<PrimaryButton buttonText="Get Our Service" buttonHref="/services" />
        </div>
      </div>
    </div>
  );
};

export default ServiceStrip;
