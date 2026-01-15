import React from "react";
import { User, Building, Briefcase } from "lucide-react";

const audiences = [
  { label: "Individuals & Families", icon: User },
  { label: "Small & Medium Businesses", icon: Building },
  { label: "Employers & Company Owners", icon: Briefcase },
];

const WhoWeServe = () => {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <div className="flex-shrink-0">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Who We Serve
            </span>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-12">
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
      </div>
    </section>
  );
};

export default WhoWeServe;