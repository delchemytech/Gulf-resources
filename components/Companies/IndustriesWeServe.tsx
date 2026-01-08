import React from "react";
import {
  Building2,
  Fuel,
  Heart,
  Hotel,
  Zap,
  Wrench,
} from "lucide-react";

const industries = [
  { name: "Construction", icon: Building2 },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Healthcare", icon: Heart },
  { name: "Hospitality", icon: Hotel },
  { name: "Power & Energy", icon: Zap },
  { name: "Engineering & Industrial Facilities", icon: Wrench },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center text-black font-bold text-2xl md:text-3xl mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <industry.icon className="w-10 h-10 text-red-600 mb-3" />
              <span className="text-sm md:text-base font-medium text-gray-800 text-center">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
