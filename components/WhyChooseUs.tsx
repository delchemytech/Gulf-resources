import HeaderWithDescription from "./ui/HeaderWithDescription";
import TrustBadges from "./ui/TrustBadges";
import { Users, Award, DollarSign, Zap, Target, Calendar } from "lucide-react";

export default function WhyChooseUs() {
  const trustData = [
    {
      id: "1",
      title: "Professional & Experienced Team",
      icon: Users,
      desc: "Our skilled professionals bring years of industry experience and expertise to deliver exceptional results for your business needs.",
    },
    {
      id: "2",
      title: "High Quality Service Standards",
      icon: Award,
      desc: "We maintain the highest standards of quality in all our services, ensuring excellence in every project we undertake.",
    },
    {
      id: "3",
      title: "Transparent & Cost-Effective Solutions",
      icon: DollarSign,
      desc: "Clear pricing with no hidden costs, providing value-driven solutions that fit your budget and business requirements.",
    },
    {
      id: "4",
      title: "Fast and Efficient Processing",
      icon: Zap,
      desc: "Streamlined processes and quick turnaround times to keep your business operations running smoothly without delays.",
    },
    {
      id: "5",
      title: "Strong Industry Expertise",
      icon: Target,
      desc: "Deep knowledge across facilities management, business setup, and travel services with proven track record of success.",
    },
    {
      id: "6",
      title: "Trusted Since 2016",
      icon: Calendar,
      desc: "Over 8 years of reliable service delivery, building long-term partnerships with clients across UAE and India.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden ">
      <div className="absolute  bottom-0 w-full h-full md:h-9/10 bg-red-200 opacity-10 transform -skew-y-2 
      origin-bottom-left overflow-hidden">
        {/* Absolute Background Shape 1 (Top Left Angled Red Line/Overlay) */}
        <div className="absolute -top-20 md:-top-10 left-0 w-full h-1/2 bg-red-600 transform -skew-y-15 
        origin-top-left -translate-y-3/4 md:-translate-y-1/2 lg:-translate-1/4"></div>

        <div className="absolute  -bottom-10 md:bottom-0 w-full h-1/2 bg-red-600 transform -skew-y-15 
        origin-bottom-right translate-y-3/4 md:translate-y-1/2 lg:translate-1/4"></div>
      </div>

      <div className="container mx-auto flex flex-col z-10  max-w-xl lg:max-w-7xl ">
        {" "}
        {/* z-10 ensures content is above background shapes */}

        <HeaderWithDescription
          title="Why Choose Us"
          tagline="Why Gulf Resources"
          bodyText="Our commitment to excellence and proven track record make us the preferred choice for businesses across UAE and India"
        />
        
        {/* Compact Grid Layout: 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-16 max-w-6xl mx-auto">
          {trustData.map((item) => (
            <TrustBadges key={item.id} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
