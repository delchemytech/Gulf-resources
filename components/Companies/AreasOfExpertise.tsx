import React from "react";
import Image from "next/image";

const expertiseAreas = [
  { name: "Automotive", image : "/webp/images/expertise/automotive.webp" },

  { name: "Engineering", image: "/webp/images/expertise/engineering.webp" },
  { name: "Healthcare", image: "/webp/images/expertise/healthcare.webp" },
  { name: "Oil & Gas", image: "/webp/images/expertise/oil-gas.webp" },
  { name: "Office Support", image: "/webp/images/expertise/office.webp" },
  { name: "Power & Energy", image: "/webp/images/expertise/power-energy.webp" },
  { name: "Hospitality", image: "/webp/images/expertise/hospitality.webp" },
  { name: "Construction", image: "/webp/images/expertise/construction.webp" },
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