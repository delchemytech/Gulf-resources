import React from "react";
import { ShieldCheck } from "lucide-react";

const HealthSafetyQuality = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <ShieldCheck className="w-12 h-12 text-red-600" />
        </div>
        <h2 className="text-black font-bold text-2xl md:text-3xl mb-6">
          Health, Safety & Quality
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our operations follow established health, safety, and quality practices to ensure consistent service delivery and compliance across all project environments.
        </p>
      </div>
    </section>
  );
};

export default HealthSafetyQuality;
