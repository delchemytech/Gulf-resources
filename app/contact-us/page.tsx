import CompaniesHome from '@/components/CompaniesHome';
import CompanyContacts from '@/components/Contact/CompanyContacts';
import ContactForm from '@/components/Contact/ContactForm';
import PageHeader from '@/components/ui/PageHeader'
import React from 'react'

const pageHeaderData = {
  tagline: "CONTACT US",
  bodyText:
    "Ready to partner with us? We're here to help you find the perfect business solution for your needs.",
  title: "GET IN TOUCH WITH US",
};

const page = () => {
  return (
    <section className='flex flex-col justify-center space-y-8 pb-16 bg-white'>
      <PageHeader {...pageHeaderData}/>
      <ContactForm/>
      {/* <CompaniesHome /> */}
      <CompanyContacts/>
    </section>
  )
}

export default page
