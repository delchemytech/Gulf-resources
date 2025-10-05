import AboutSection from "@/components/AboutSection";
import MissionVision from "@/components/MissionVision";
import RevInSection from "@/components/RevInSection";
import PageHeader from "@/components/ui/PageHeader";

export default function about() {
  const headerData = {
    title: "Gulf Resources",
    tagline: "OUR JOURNEY",
    bodyText: `AFounded in 2010, Gulf Track Group emerged from a vision to 
    create a comprehensive business solutions provider that could serve the 
    diverse needs of the rapidly growing Gulf region. What started as a small 
    facilities management company has evolved into a diversified group of specialized 
    companies, each excelling in their respective fields.
    Our journey has been marked by strategic expansion, careful market analysis, 
    and an unwavering commitment to quality. We recognized early on that businesses 
    in the Gulf region needed reliable partners who could understand their unique 
    challenges and provide tailored solutions that drive growth and efficiency.`,
  };
  return (

    <div>
      <PageHeader
        tagline="OUR STORY"
        bodyText="Building excellence across the Gulf region through diversified business solutions and unwavering commitment to quality service delivery."
        title="ABOUT US"
      />

      <AboutSection
        imageURL={"/workers.png"}
        alt={"Two workers smiling"}
        headerData={headerData}
        buttonText={"CONTACT WITH US"}
        buttonHref={"/about"}
      />

      <MissionVision
      />
        <RevInSection/>
    </div>

  );
}
