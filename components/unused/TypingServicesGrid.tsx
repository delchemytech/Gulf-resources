import React from "react";

const serviceData = [
  {
    category: "Business Setup & Trade License",
    items: ["New Company Setup", "Trade License Renewal"],
    highlight: true,
  },
  {
    category: "Company Visa",
    items: ["New Visa Applications", "Visa Renewal"],
    highlight: false,
  },
  {
    category: "Family Visa",
    items: ["Family Visa Processing", "Family Health Insurance", "New Born Visa", "Parents Visa"],
    highlight: false,
  },
  {
    category: "Insurance",
    items: [
      "Daman File Opening & Renewal",
      "Workmen Compensation",
      "ILOE Insurance",
      "Health & Property Insurance",
      "Flexi Insurance",
      "Third Party Liability",
    ],
    highlight: true,
  },
  {
    category: "Vehicle Services",
    items: ["Vehicle Renewal", "Fine Payments", "Vehicle Insurance"],
    highlight: false,
  },
  {
    category: "Legal Documentation",
    items: ["Power of Attorney (Same Day)"],
    highlight: false,
  },
];

const TypingServicesGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-gray-900 font-bold text-2xl md:text-3xl">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                service.highlight
                  ? "bg-red-600 text-white"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              <h3
                className={`font-semibold text-lg mb-4 pb-3 border-b ${
                  service.highlight ? "border-red-400" : "border-gray-200"
                }`}
              >
                {service.category}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`text-sm flex items-start gap-2 ${
                      service.highlight ? "text-red-100" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                        service.highlight ? "bg-white" : "bg-red-600"
                      }`}
                    ></span>
                    {item}
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

export default TypingServicesGrid;