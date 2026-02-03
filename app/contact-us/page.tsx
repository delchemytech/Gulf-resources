
import type { Metadata } from "next";
import CompanyContacts from '@/components/Contact/CompanyContacts';
import ContactForm from '@/components/Contact/ContactForm';
import PageHeader from '@/components/ui/PageHeader'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us - Gulf Resources Professional Services",
  description: "Get in touch with Gulf Resources for facilities management, business setup, visa services, and travel solutions. Office in Abu Dhabi, UAE and Kerala, India. Call +971 2 517 6889.",
  keywords: [
    "contact Gulf Resources",
    "Abu Dhabi office contact",
    "facilities management contact",
    "business setup consultation",
    "visa services inquiry",
    "Gulf Resources phone number",
    "professional services UAE contact"
  ],
  openGraph: {
    title: "Contact Gulf Resources - Professional Business Solutions",
    description: "Contact Gulf Resources for facilities management, business setup, visa services, and travel solutions. Offices in Abu Dhabi, UAE and Kerala, India.",
    images: ['/webp/contact_hero.webp'],
  },
};

const pageHeaderData = {
  tagline: "CONTACT US",
  bodyText:
    "Ready to partner with us? We're here to help you find the perfect business solution for your needs.",
  title: "GET IN TOUCH WITH US",
  bgImage: "/webp/contact_hero.webp",
  mobileBgImage: "/webp/contact_hero_mobile.webp",
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
