import React from "react";

interface ServiceBlock {
  title: string;
  description: string;
  services: string[];
}

interface ServiceBlocksDetailedProps {
  blocks: ServiceBlock[];
}

const ServiceBlocksDetailed = ({ blocks }: ServiceBlocksDetailedProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center text-gray-900 font-bold text-2xl md:text-3xl mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {block.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {block.description}
              </p>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  Services include
                </p>
                <ul className="space-y-1.5">
                  {block.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="text-sm text-gray-700 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocksDetailed;