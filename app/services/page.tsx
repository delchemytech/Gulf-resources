import ServiceSect from '@/components/Services/ServiceSect'
import PageHeader from '@/components/ui/PageHeader'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-16 pb-16 bg-white z-0 '>
      <PageHeader
        tagline="OUR SERVICES "
        bodyText="Building excellence across the Gulf region through diversified business
         solutions and unwavering commitment to quality service delivery."
        title="Service We Provide"
      />

      <ServiceSect />
    </div>
  );
};

export default page
