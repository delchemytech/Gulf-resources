import React from "react";

const reasons = [
  { stat: "PRO", label: "Experienced Professionals" },
  { stat: "100%", label: "Accurate Documentation" },
  { stat: "Fast", label: "Timely Processing" },
  { stat: "All", label: "Individuals & Businesses" },
];

const WhyTrustUs = () => {
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
              Why Choose Gulf Track Typing Services
            </h2>
            <p className="text-gray-400 leading-relaxed">
              With years of experience in UAE documentation and PRO services, we
              deliver reliable, accurate, and timely support for all your typing
              and government liaison needs. Our transparent approach ensures you
              stay informed at every step.
            </p>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {reasons.map((item, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
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

export default WhyTrustUs;