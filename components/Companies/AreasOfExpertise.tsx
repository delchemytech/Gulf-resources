import React from "react";
import Image from "next/image";

const expertiseAreas = [
  { name: "Automotive", image : "/images/expertise/automotive.png" },

  { name: "Engineering", image: "/images/expertise/engineering.png" },
  { name: "Healthcare", image: "/images/expertise/healthcare.png" },
  { name: "Oil & Gas", image: "/images/expertise/oil-gas.png" },
  { name: "Office Support", image: "/images/expertise/office.png" },
  { name: "Power & Energy", image: "/images/expertise/power-energy.png" },
  { name: "Hospitality", image: "/images/expertise/hospitality.png" },
  { name: "Construction", image: "/images/expertise/construction.png" },
];

const AreasOfExpertise = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center text-gray-900 font-bold text-2xl md:text-3xl mb-12">
          Area of Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.name}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Red Gradient Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-red-600 via-red-600/80 to-transparent" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-white font-medium text-sm md:text-base">
                  {area.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;