import CompanyCard from "./company-card";
import { CometCard } from "./ui/comet-card";

const CompaniesHome = () => {
  const data = [
    {
      id: "1",
      imageUrl: "/company-facility.png",
      imageAlt: "Construction Worker",
      title: "Gulf Resources Facility Management",
      description:
        "Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor.",
      companyLink: "/about",
    },
    {
      id: "2",
      imageUrl: "/company-business.png",
      imageAlt: "Construction Worker",
      title: "Gulf Track Business Setup & Visa Works",
      description:
        "Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor.",
      companyLink: "/about",
    },
    {
      id: "3",
      imageUrl: "/company-tours.png",
      imageAlt: "Construction Worker",
      title: "Gulf Track Tours & Travels",
      description:
        "Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor.",
      companyLink: "/about",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="justify-center text-3xl font-extrabold">
        Our Companies
      </div>
      <div className="flex flex-wrap w-full justify-center my-10 items-center mx-auto px-4 md:px-8 gap-6">
        {data.map((item) => (
          <CometCard key={item.id} className="w-75">
            <CompanyCard
              imageUrl={item.imageUrl} // Make sure this image exists in your public folder
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              companyLink={item.companyLink}
            />
          </CometCard>
        ))}
      </div>
    </div>
  );
};

export default CompaniesHome;
