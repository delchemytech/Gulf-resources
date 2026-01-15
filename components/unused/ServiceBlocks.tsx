import React from "react";

const services = [
  {
    number: "01",
    title: "Business Setup & Trade Licensing",
    description:
      "End-to-end support for new business formation and license renewals, handling documentation, applications, and coordination with relevant government departments.",
    items: ["New Company Setup", "Trade License Renewal"],
    accent: true,
  },
  {
    number: "02",
    title: "Visa Services",
    description:
      "Complete assistance for company and family visa processing, ensuring accurate documentation and timely submissions in line with UAE regulations.",
    items: [
      "Company Visa (New & Renewal)",
      "Family Visa Services",
      "New Born Visa",
      "Parents Visa",
    ],
    accent: false,
  },
  {
    number: "03",
    title: "Insurance & Compliance",
    description:
      "Support for mandatory and optional insurance requirements for businesses and individuals, including processing, renewals, and compliance coordination.",
    items: [
      "Daman File Opening & Renewal",
      "Workmen Compensation",
      "ILOE Insurance",
      "Health & Property Insurance",
      "Flexi Insurance",
      "Third Party Liability",
    ],
    accent: true,
  },
  {
    number: "04",
    title: "Vehicle & Traffic Services",
    description:
      "Assistance with vehicle-related government services, helping clients stay compliant and avoid delays.",
    items: ["Vehicle Renewal", "Fine Payments", "Vehicle Insurance"],
    accent: false,
  },
  {
    number: "05",
    title: "Documentation & Attestation",
    description:
      "Professional handling of legal and personal documentation, including government submissions and attestations.",
    items: [
      "Certificate Attestation (Educational, Marriage, Birth)",
      "Power of Attorney (Same Day)",
    ],
    accent: false,
  },
  {
    number: "06",
    title: "Saudi Business Expansion",
    description:
      "Documentation and coordination support for businesses planning expansion into Saudi Arabia.",
    items: ["Business Setup – Saudi Arabia", "Saudi Branch Setup"],
    accent: true,
  },
];

const ServiceBlocks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-600 uppercase">
            What We Offer
          </span>
          <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mt-3">
            Our Services
          </h2>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`py-10 border-t border-gray-100 ${
                index === services.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="grid grid-cols-12 gap-6 md:gap-8">
                {/* Number */}
                <div className="col-span-12 md:col-span-1">
                  <span
                    className={`text-3xl font-bold ${
                      service.accent ? "text-red-600" : "text-gray-200"
                    }`}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="col-span-12 md:col-span-6">
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-2 bg-gray-50 text-sm text-gray-600 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocks;