import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Use - Gulf Resources",
  description: "Gulf Resources terms of use and conditions. Please read these terms carefully before using our facilities management, business setup, visa, and travel services.",
  keywords: [
    "Gulf Resources terms of use",
    "terms and conditions UAE",
    "service terms facilities management",
    "Gulf Resources legal terms",
    "business services terms"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const pageHeaderData = {
  tagline: "LEGAL",
  bodyText:
    "Please read these terms and conditions carefully before using our services.",
  title: "Terms of Use",
};

const TermsOfUsePage = () => {
  return (
    <div className="bg-white pb-16">
      <PageHeader {...pageHeaderData} />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          
          <section className="mb-8">
            <p className="text-gray-600 mb-6">
              Last Updated: January 15, 2025
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Gulf Resources Facilities Management L.L.C and its affiliated companies. By accessing or using our website and services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the services provided by Gulf Resources Facilities Management L.L.C, Gulf Track Typing Services L.L.C, and Gulf Track Tours & Travels (collectively &quot;Gulf Resources,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by these Terms of Use and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gulf Resources provides the following services through its companies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Facilities management and manpower services</li>
              <li>Business setup, typing, and PRO services</li>
              <li>Travel, visa processing, and documentation services</li>
              <li>Recruitment and staffing solutions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or fraudulent purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Gulf Resources or its content suppliers and is protected by UAE and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Fees and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Service fees are determined based on the specific services requested. Payment terms will be communicated at the time of service agreement. All fees are non-refundable unless otherwise stated in writing. We reserve the right to modify our fees at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Gulf Resources shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services may involve coordination with government entities, airlines, hotels, and other third-party service providers. We are not responsible for the actions, errors, or omissions of these third parties. Any disputes with third-party providers should be resolved directly with them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain strict confidentiality of all client information and documents. However, we may disclose information when required by law or when necessary to provide the requested services (e.g., submitting documents to government authorities).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these Terms of Use. Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Use shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi, UAE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Gulf Resources Facilities Management L.L.C</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Office 4, Musaffah 37, Opp. Gift Action, Abu Dhabi, UAE
              </p>
              <p className="text-gray-700 mb-2">
                Phone: +971 2 517 6889, +971 50 134 4537
              </p>
              <p className="text-gray-700">
                Email: info@gulfresources.ae
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
