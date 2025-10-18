import Image from "next/image";
import HeaderWithDescription from "./ui/HeaderWithDescription";
import TrustBadges from "./ui/TrustBadges";

export default function WhyChooseUs() {
  const trustData = [
    {
      id: "1",
      title: "Reliability",
      imageURL: "/c1.svg",
      desc: "Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence.",
    },
    {
      id: "2",
      title: "Expertise",
      imageURL: "/c1.svg",
      desc: "Deep industry knowledge and specialized skills across all our service areas, ensuring professional solutions.",
    },
    {
      id: "3",
      title: "Customer Focus",
      imageURL: "/c1.svg",
      desc: "Client satisfaction is our priority. We tailor our services to meet your specific needs and exceed expectations.",
    },
    {
      id: "4",
      title: "Diversified Services",
      imageURL: "/c1.svg",
      desc: "One-stop solution for multiple business needs, providing convenience and integrated service delivery.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden">
      <div className="absolute  bottom-0 w-full h-9/10 bg-red-200 opacity-10 transform -skew-y-2 origin-bottom-left overflow-hidden">
        {/* Absolute Background Shape 1 (Top Left Angled Red Line/Overlay) */}
        <div className="absolute -top-10 left-0 w-full h-1/2 bg-red-600 transform -skew-y-15 origin-top-left -translate-y-1/4"></div>

        <div className="absolute  bottom-0 w-full h-1/2 bg-red-600 transform -skew-y-15 origin-bottom-right translate-y-1/4"></div>
      </div>

      <div className="container mx-auto flex flex-col z-10 md:w-3xl lg:max-w-7xl">
        {" "}
        {/* z-10 ensures content is above background shapes */}

        <HeaderWithDescription
          title="Why choose us "
          tagline="Why Gulf Resources"
          bodyText="Our commitment to excellence sets us apart in the competitive Gulf business landscape"
        />
        <div className="w-full flex flex-wrap justify-center items-center gap-8 py-16 ">
          {trustData.map((item) => (
            <TrustBadges key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
