import React from "react";

const AdditionalServices = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Certificate Attestation */}
          <div>
            <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-3">
              Document Services
            </p>
            <h3 className="font-bold text-xl md:text-2xl mb-6">
              Certificate Attestation
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Attestation services for personal, educational, and official documents.
            </p>
            <div className="space-y-3">
              {[
                "Educational Certificate Attestation",
                "Marriage Certificate Attestation",
                "Birth Certificate Attestation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <span className="w-6 h-[1px] bg-red-600"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Abroad Business Expansion */}
          <div>
            <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-3">
              International
            </p>
            <h3 className="font-bold text-xl md:text-2xl mb-6">
              Abroad Business Expansion
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Supporting businesses with expansion into Saudi Arabia.
            </p>
            <div className="space-y-3">
              {["Business Setup – Saudi Arabia", "Saudi Branch Setup"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="w-6 h-[1px] bg-red-600"></span>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;