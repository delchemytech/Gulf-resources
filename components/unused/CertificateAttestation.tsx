import React from "react";

const attestationServices = [
  "Educational Certificate Attestation",
  "Marriage Certificate Attestation",
  "Birth Certificate Attestation",
];

const CertificateAttestation = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="md:w-1/3">
            <h2 className="text-gray-900 font-bold text-xl md:text-2xl">
              Certificate Attestation
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Attestation services for personal, educational, and official documents.
            </p>
          </div>
          <div className="md:w-2/3 flex flex-wrap gap-3">
            {attestationServices.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-sm text-gray-700 rounded border border-gray-200"
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

export default CertificateAttestation;