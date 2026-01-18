"use client";

import PageHero from "@/components/PageHero";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import RedParallelograms from "@/components/Icons/RedParallelograms";

export default function AboutPage() {
  const mission_data = [
    {
      id: "1",
      title: "Mission",
      lucideIcon: Target,
      desc: "To deliver exceptional business solutions through our specialized companies, enabling our clients to focus on their core business while we handle their operational needs with professionalism and expertise.",
    },
    {
      id: "2",
      title: "Vision",
      lucideIcon: Eye,
      desc: "To be the leading partner of choice in the Gulf region, recognized for our commitment to excellence, innovation, and sustainable growth across all our business sectors.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero title="About Us" breadcrumbText="About Us" backgroundImage="/hero_bg.png" />

      {/* Detailed Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <RedParallelograms className="w-6 h-3 text-red-600" />
                <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                  Who We Are
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner for Business & Manpower Solutions
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">Gulf Resources Facilities Management L.L.C</span> and{" "}
                  <span className="font-semibold text-gray-900">Gulf Track Business Setup Services</span> are
                  recognized providers of professional manpower, recruitment, business setup, and corporate support
                  services across the UAE and GCC region.
                </p>
                <p>
                  Established in 2016, we have built a reputation for reliability, integrity, and excellence,
                  delivering efficient and cost-effective solutions tailored to meet our clients' business needs.
                  Our journey began with a vision to bridge the gap between talent and opportunity, and today,
                  we stand as a pillar of support for businesses looking to thrive in the competitive Gulf market.
                </p>
                <p>
                  With our head office at Office 4, Musaffah 37, Opp. Gift Action, Abu Dhabi and an international
                  branch in Kerala, India, we proudly serve local and overseas clients with seamless operational
                  support. Our dual presence ensures that we can source the best talent and provide on-ground
                  support where it matters most.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/about_workers.png"
                  alt="Professional Workers"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/workers.png"
                  alt="Team Meeting"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 md:h-60 rounded-2xl overflow-hidden shadow-lg col-span-2">
                 <Image
                  src="/bg2.png"
                  alt="Office Environment"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
                <RedParallelograms className="w-6 h-3 text-red-600" />
                <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                  Our Core Values
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Driven by Purpose</h2>
        </div>
        <MissionVision data={mission_data} />
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Call to Action Strip */}
      <section className="bg-red-600 py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">Ready to Transform Your Business?</h2>
                <p className="text-red-100 text-lg">Partner with us for reliable manpower and business solutions.</p>
            </div>
            <a 
                href="/contact-us" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
                Contact Us Today
            </a>
        </div>
      </section>
    </main>
  );
}
