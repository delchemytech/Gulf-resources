import Image from "next/image";
import React from "react";
import RedParallelograms from "../Icons/RedParallelograms";

interface data {
  tagline: string;
  title: string;
  bodyText: string;
  alt?: string;
}

const PageHeader = ({ tagline, title, bodyText, alt = "Page Bg" }: data) => {
  return (
    <div className="z-10">
      <div className="relative flex w-screen h-[500px]  text-white items-center justify-start">
        <Image
          src={"/images/pageHeaderBg.png"}
          fill
          alt={alt}
          className="object-cover "
        />
        <div className="container max-w-7xl mx-auto z-10">
          <div className=" p-8 max-w-3xl  py-8 sm:py-8 md:py-12">
            {/* Red Tagline/Header with Red Bars */}
            <div className="flex items-center  mb-4">
              {/* Small Red Bars (Matching the design) */}
              <RedParallelograms className="w-8 h-4 " />
              <p className="text-base font-semibold tracking-wider uppercase text-red-600">
                {tagline}
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl   font-extrabold text-white mb-6 leading-tight">
              {title}
            </h2>

            {/* Body Text */}
            <p className="text-base  text-gray-300 leading-relaxed">
              {bodyText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
