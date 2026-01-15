import React from "react";

interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
}

interface DetailedServicesProps {
  categories: ServiceCategory[];
}

const DetailedServices = ({ categories }: DetailedServicesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-center text-gray-900 font-bold text-2xl md:text-3xl mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {categories.map((category, index) => (
            <div key={index} className="border-l-2 border-red-600 pl-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{category.description}</p>
              <ul className="space-y-1">
                {category.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="text-sm text-gray-700 flex items-center gap-2"
                  >
                    <span className="text-red-600">—</span>
                    {service}
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

export default DetailedServices;