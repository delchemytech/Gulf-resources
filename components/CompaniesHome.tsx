import CompanyCard from "./company-card"
import { CometCard } from "./ui/comet-card"



const CompaniesHome = () => {
  return (
    <div className="flex justify-center my-10 items-center mx-auto p-4 md:p-8 gap-8">
        <CometCard className="w-80">
        <CompanyCard
        imageUrl="/workers.png" // Make sure this image exists in your public folder
        imageAlt="Construction Worker"
        title="Gulf Resources"
        subtitle="Facilities Management"
        description="Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor."
        companyLink="/about" // Link for the button
      />
      </CometCard>
      <CometCard className="w-80">
        <CompanyCard
        imageUrl="/workers.png" // Make sure this image exists in your public folder
        imageAlt="Construction Worker"
        title="Gulf Resources"
        subtitle="Facilities Management"
        description="Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor."
        companyLink="/about" // Link for the button
      />
      </CometCard>
      <CometCard className="w-80">
        <CompanyCard
        imageUrl="/workers.png" // Make sure this image exists in your public folder
        imageAlt="Construction Worker"
        title="Gulf Resources"
        subtitle="Facilities Management"
        description="Nostra habitasse inceptos placerat vivamus vestibulum blandit odio dignissim aliquet nunc taciti, cubilia aenean lobortis class sollicitudin conubia urna acter elementum mauris porttitor mus commodo tortor."
        companyLink="/about" // Link for the button
      />
      </CometCard>
    </div>
  )
}

export default CompaniesHome
