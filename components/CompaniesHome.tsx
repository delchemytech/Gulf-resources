import CompanyCardNew from "./ui/CompanyCardNew";
import { CometCard } from "./ui/comet-card";
import RedParallelograms from "./Icons/RedParallelograms";
import { Building2, FileCheck, Plane } from "lucide-react";

const CompaniesHome = () => {
  const data = [
    {
      id: "1",
      imageUrl: "/webp/facility_management.webp",
      imageAlt: "Facilities Management",
      title: "Gulf Resources Facilities Management",
      subtitle: "Industrial & Commercial Services | UAE",
      description:
        "Providing facilities management, manpower supply, building maintenance, and oil & gas support services for corporate and industrial clients.",
      companyLink: "/our-companies/facilities-management",
      Icon: Building2,
    },
    {
      id: "2",
      imageUrl: "/webp/business_typing.webp",
      imageAlt: "Typing Services",
      title: "Gulf Track Typing Services",
      subtitle: "Typing, PRO & Documentation Services | UAE",
      description:
        "Offering typing and PRO services for individuals and businesses, including visa processing, company documentation, insurance, and government-related services.",
      companyLink: "/our-companies/business-setup&visa-work",
      Icon: FileCheck,
    },
    {
      id: "3",
      imageUrl: "/webp/tours_travels.webp",
      imageAlt: "Tours and Travels",
      title: "Gulf Track Tours & Travels",
      subtitle: "Travel & Visa Services | Pattambi, Kerala",
      description:
        "Providing travel and visa services for overseas travel and employment, with a focus on Gulf destinations.",
      companyLink: "/our-companies/tours-and-travels",
      Icon: Plane,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <RedParallelograms className="w-6 h-3 text-red-600" />
        <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
          What We Offer
        </span>
      </div>
      <div className="justify-center text-4xl md:text-5xl text-black font-bold mb-4">
        Our Companies
      </div>
      <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl px-4 mb-8">
        Three specialized companies working together to deliver comprehensive business solutions across the UAE and India.
      </p>
      
      {/* Company Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8 my-10 items-stretch">
        {data.map((item) => (
          <CometCard key={item.id} className="h-full">
            <CompanyCardNew {...item} />
          </CometCard>
        ))}
      </div>
    </div>
  );
};

export default CompaniesHome;
