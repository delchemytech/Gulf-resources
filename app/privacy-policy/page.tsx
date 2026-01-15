import PageHeader from "@/components/ui/PageHeader";
import React from "react";

const pageHeaderData = {
  tagline: "LEGAL",
  bodyText:
    "Your privacy is important to us. Learn how we collect, use, and protect your information.",
  title: "Privacy Policy",
};

const PrivacyPolicyPage = () => {
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
              Gulf Resources Facilities Management L.L.C and its affiliated companies ("Gulf Resources," "we," "us," or "our") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Name, contact details (email, phone number, address)</li>
              <li>Passport and visa information</li>
              <li>Educational and employment certificates</li>
              <li>Business registration documents</li>
              <li>Financial information for payment processing</li>
              <li>Travel preferences and booking details</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing and managing our services (visa processing, business setup, travel bookings, etc.)</li>
              <li>Processing payments and maintaining financial records</li>
              <li>Communicating with you about your service requests</li>
              <li>Submitting documents to government authorities and third-party service providers</li>
              <li>Improving our services and website functionality</li>
              <li>Complying with legal obligations and regulations</li>
              <li>Sending promotional materials (with your consent)</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Government Authorities:</strong> For visa processing, business registration, and compliance purposes</li>
              <li><strong>Service Providers:</strong> Airlines, hotels, insurance companies, and other third parties necessary to fulfill your service requests</li>
              <li><strong>Business Partners:</strong> Trusted partners who assist in delivering our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Secure servers and encrypted data transmission</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Document retention periods may vary based on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Legal and regulatory requirements</li>
              <li>Business and operational needs</li>
              <li>Dispute resolution and legal proceedings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser, but disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than the UAE. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicyPage;
