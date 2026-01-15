import React from "react";

const reasons = [
  {
    number: "01",
    title: "Experienced Team",
    desc: "PRO and documentation specialists with years of UAE experience",
  },
  {
    number: "02",
    title: "Transparent Process",
    desc: "Clear communication and structured workflows",
  },
  {
    number: "03",
    title: "Timely Delivery",
    desc: "Efficient processing with reliable turnaround times",
  },
  {
    number: "04",
    title: "Full Support",
    desc: "Services for individuals and businesses alike",
  },
];

const TypingWhyUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Our Approach
          </p>
          <h2 className="text-gray-900 font-bold text-2xl md:text-3xl">
            Why Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-3">
                {reason.number}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-500">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypingWhyUs;