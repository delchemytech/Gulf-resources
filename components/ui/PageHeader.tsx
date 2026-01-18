import Image from "next/image";
import React from "react";
import RedParallelograms from "../Icons/RedParallelograms";

interface data {
  tagline: string;
  title: string;
  bodyText: string;
  alt?: string;
  bgImage?: string;
}

const PageHeader = ({ tagline, title, bodyText, alt = "Page Bg", bgImage = "/images/pageHeaderBg.png" }: data) => {
  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          fill
          alt={alt}
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto z-10 px-4 md:px-8">
        <div className="max-w-3xl py-12 space-y-6">
          {/* Red Tagline/Header with Red Bars */}
          <div className="flex items-center gap-3 animate-fade-in-up">
            <RedParallelograms className="w-8 h-4 text-red-600" />
            <p className="text-sm md:text-base font-bold tracking-widest uppercase text-red-500">
              {tagline}
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight animate-fade-in-up delay-100">
            {title}
          </h1>

          {/* Body Text */}
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
            {bodyText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
