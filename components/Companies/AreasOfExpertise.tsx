import React from "react";
import {
  Building2,
  Fuel,
  Zap,
  Wrench,
  Heart,
  Hotel,
  Car,
  Building,
} from "lucide-react";

const expertiseAreas = [
  { name: "Construction", icon: Building2 },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Power & Energy", icon: Zap },
  { name: "Engineering", icon: Wrench },
  { name: "Healthcare", icon: Heart },
  { name: "Hospitality", icon: Hotel },
  { name: "Automotive", icon: Car },
  { name: "Office & Commercial", icon: Building },
];

const AreasOfExpertise = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-center text-gray-900 font-bold text-2xl md:text-3xl mb-4">
          Areas of Expertise
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
          Our experience spans multiple sectors, enabling us to support diverse operational environments.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.name}
              className="flex flex-col items-center p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <area.icon className="w-8 h-8 text-red-600 mb-3" />
              <span className="text-sm font-medium text-gray-800 text-center">
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;