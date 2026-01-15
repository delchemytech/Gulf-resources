import React from "react";
import { User, Briefcase, Plane } from "lucide-react";

const audiences = [
  { label: "Individuals & Families Travelling Abroad", icon: User },
  { label: "Job Seekers to Gulf Countries", icon: Briefcase },
  { label: "Short-term Overseas Visitors", icon: Plane },
];

const TravelWhoWeServe = () => {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
          <div className="flex-shrink-0">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Who We Serve
            </span>
          </div>
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {audiences.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-6 max-w-2xl">
          Our services are designed to simplify travel and visa processes through clear guidance and reliable support.
        </p>
      </div>
    </section>
  );
};

export default TravelWhoWeServe;