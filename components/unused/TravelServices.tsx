import React from "react";

const services = [
  {
    number: "01",
    title: "Flight Ticket Booking",
    description:
      "Domestic and international flight ticket booking with flexible options and reliable fare support.",
    items: [
      "Domestic & international air tickets",
      "Best available fare options",
      "Flexible itineraries & rebooking",
      "Travel schedule changes",
    ],
    accent: true,
  },
  {
    number: "02",
    title: "Visit Visa Services",
    description:
      "Professional assistance for tourist and visit visa applications, ensuring proper documentation and timely processing.",
    items: [
      "Tourist visit visa assistance",
      "Documentation guidance",
      "Visa extensions & re-entry support",
    ],
    accent: false,
  },
  {
    number: "03",
    title: "Job Visa Assistance",
    description:
      "End-to-end support for individuals travelling abroad for employment, with a focus on Gulf countries.",
    items: [
      "Job visa documentation support",
      "Employer coordination assistance",
      "Work permit guidance",
    ],
    accent: true,
  },
  {
    number: "04",
    title: "Saudi Visa Stamping",
    description:
      "Specialized support for Saudi Arabia visa stamping procedures, handled with accuracy and follow-up.",
    items: [
      "Visa submission & tracking",
      "Appointment scheduling",
      "Stamping coordination",
    ],
    accent: false,
  },
  {
    number: "05",
    title: "Certificate Attestation",
    description:
      "Professional attestation services to ensure documents meet embassy and employer requirements for overseas travel and employment.",
    items: [
      "Educational certificate attestation",
      "Employment & experience certificate",
      "Personal document attestation",
    ],
    accent: true,
  },
];

const TravelServices = () => {
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

export default TravelServices;