import CompanyCard from "./company-card";
import CompanyCardNew from "./ui/CompanyCardNew";
import { CometCard } from "./ui/comet-card";

const CompaniesHome = () => {
  const data = [
    {
      id: "1",
      imageUrl: "/company-facility.png",
      imageAlt: "Construction Worker",
      title: "Gulf Resources Facility Management",
      description:
        "The main difference between the HTML elements <hr> and <div> lies in their semantic meaning and default role in a document.They can both be styled to look like a dividing line using CSS (especially with Tailwind), but their purpose is fundamentally different.",
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
      <div className="flex max-w-9xl flex-wrap justify-center my-10 items-center mx-auto px-4 md:px-8 gap-12">
        {data.map((item) => (
          <CometCard key={item.id} className="max-w-sm">
            <CompanyCardNew  {...item}
            />
          </CometCard>
        ))}
      </div>
    </div>
  );
};

export default CompaniesHome;
