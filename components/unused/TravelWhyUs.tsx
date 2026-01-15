import React from "react";

const reasons = [
  { stat: "Expert", label: "Travel & Visa Support Team" },
  { stat: "Clear", label: "Documentation Guidance" },
  { stat: "Timely", label: "Processing & Follow-up" },
  { stat: "Reliable", label: "After-Service Support" },
];

const TravelWhyUs = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-red-500 uppercase">
              Why Gulf Track
            </span>
            <h2 className="font-bold text-3xl md:text-4xl mt-3 mb-6">
              Why Choose Gulf Track Tours & Travels
            </h2>
            <p className="text-gray-400 leading-relaxed">
              With extensive experience in travel planning and visa services, we
              provide reliable support for individuals and families travelling
              abroad. Our transparent approach and dedicated team ensure smooth
              processing from start to finish.
            </p>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {reasons.map((item, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {item.stat}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelWhyUs;