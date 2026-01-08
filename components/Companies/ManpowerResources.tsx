import React from "react";
import { Users, Wrench, Zap, HardHat } from "lucide-react";

const manpowerCategories = [
  {
    category: "Civil",
    icon: HardHat,
    roles: ["Mason", "Steel Fixer", "Rigger", "Painter", "Plumber", "Carpenter"],
  },
  {
    category: "Electrical",
    icon: Zap,
    roles: ["Electrical Technicians"],
  },
  {
    category: "Mechanical",
    icon: Wrench,
    roles: ["Welder", "Insulator", "Fabricator", "Ductman"],
  },
  {
    category: "Support Staff",
    icon: Users,
    roles: ["Helpers"],
  },
];

const ManpowerResources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center text-black font-bold text-2xl md:text-3xl mb-4">
          Manpower Resources
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide qualified manpower across civil, electrical, mechanical, and general support categories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {manpowerCategories.map((category) => (
            <div
              key={category.category}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.roles.map((role, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManpowerResources;