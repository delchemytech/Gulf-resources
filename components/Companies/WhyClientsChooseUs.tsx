import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

interface WhyClientsChooseUsProps {
  reasons?: string[];
  safetyText?: string;
  showSafety?: boolean;
}

const defaultReasons = [
  "Experienced service teams",
  "Reliable manpower and operations support",
  "Focus on safety and quality standards",
  "Timely and professional service delivery",
];

const defaultSafetyText =
  "Our operations follow established health, safety, and quality practices to ensure consistent service delivery and compliance across all project environments.";

const WhyClientsChooseUs = ({
  reasons = defaultReasons,
  safetyText = defaultSafetyText,
  showSafety = true,
}: WhyClientsChooseUsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-center text-gray-900 font-bold text-2xl md:text-3xl mb-10">
          Why Work With Us
        </h2>

        {/* Health, Safety & Quality */}
        {showSafety && (
          <div className="flex items-start gap-4 bg-white rounded-lg p-5 mb-8 border border-gray-100">
            <ShieldCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Health, Safety & Quality
              </h3>
              <p className="text-sm text-gray-600">{safetyText}</p>
            </div>
          </div>
        )}

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100"
            >
              <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-gray-800">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsChooseUs;