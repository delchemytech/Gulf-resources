import React from "react";

const expansionServices = ["Business Setup – Saudi Arabia", "Saudi Branch Setup"];

const AbroadBusinessExpansion = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="md:w-1/3">
            <h2 className="text-gray-900 font-bold text-xl md:text-2xl">
              Abroad Business Expansion
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Supporting businesses with expansion into Saudi Arabia.
            </p>
          </div>
          <div className="md:w-2/3 flex flex-wrap gap-3">
            {expansionServices.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-50 text-sm text-gray-700 rounded border border-gray-200"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbroadBusinessExpansion;