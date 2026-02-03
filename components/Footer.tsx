"use client";

import Link from "next/link";
import Image from "next/image";

import { SVGProps } from "react";
import RedParallelograms from "./Icons/RedParallelograms";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Linkedin, Clock } from "lucide-react";

// --- Type Definitions (Reusing the previous definitions for structure) ---
interface FooterLink {
  key: string;
  label: string;
  href: string;
  subList?: FooterLink[];
}



const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/gulf_resourcesfacilities?igsh=MXBoM3N3OWpqbzlsMQ==", label: "Gulf Resources Instagram" },
  { icon: Instagram, href: "https://www.instagram.com/gulftracktyping_services_2024?igsh=YWNkd2I0Z2Y5ODNu", label: "Gulf Track Instagram" },
];

const Footer = () => {
  const DEFAULT_COMPANY_LINKS: FooterLink[] = [
    {
      key: "31",
      label: "Gulf Resources Facilities Management",
      href: "/our-companies/facilities-management",
    },
    {
      key: "32",
      label: "Gulf Track Business Setup & Visa Works",
      href: "/our-companies/business-setup&visa-work",
    },
    {
      key: "33",
      label: "Gulf Track Tours & Travels",
      href: "/our-companies/tours-and-travels",
    },
  ];

  const logo_address = () => {
    return (
      <>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            {/* Logo Accent and Text */}
            <RedParallelograms className="w-8 h-4 text-red-600 mr-2" />
            <span className="text-3xl font-bold">Logo</span>
          </div>

          {/* Horizontal rule below the logo text */}
          <hr className="w-48 h-0.5 border-none bg-gradient-to-r from-red-600 via-red-600 to-[#1C1C1C]" />
        </div>
        <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
          Office 4, Musaffah 37, Opp. Gift Action <br />
          Abu Dhabi, UAE
        </p>

        <div className="flex space-x-3">
          {/* Social Icons */}
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="h-9 w-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
            >
              <social.icon className="w-4 h-4 text-white" strokeWidth={2} />
            </a>
          ))}
        </div>
      </>
    );
  };

  // Default links data (can be imported from lib/data/constants.js in a real app)
  const DEFAULT_QUICK_LINKS: FooterLink[] = [
    { key: "4", label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* 1. CTA Banner Section (The clear image shows this area is one dark background) */}
      <div className="bg-[#1c1c1c] pt-12 pb-24 md:pt-16 md:pb-24">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center 
        justify-between text-center md:text-left "
        >
          <div className="md:w-1/2 ml-4 mb-8 md:mb-0">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Ready to Partner with Excellence?
            </h3>
            <p className="text-gray-400 max-w-lg text-sm md:text-base">
              Join hundreds of satisfied clients who trust Gulf Resources for
              their business solutions. Let&aposs discuss how we can support
              your success.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3
             bg-red-600 text-white font-bold text-sm uppercase rounded-md hover:bg-red-700 transition 
             duration-300 shadow-lg whitespace-nowrap"
            >
              CONTACT US TODAY
            </Link>
            {/* Small black play/arrow button next to the CTA */}
            <button
              className="h-10 w-10 bg-black rounded-md border border-white 
            flex items-center justify-center hover:bg-gray-700 transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 4.5l9 5-9 5V4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Content and Links Section */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="relative w-48 h-16">
               <Link href="/">
                 <Image 
                   src="/webp/images/logo.webp" 
                   alt="Gulf Resources Logo - Facilities Management and Business Services" 
                   width={180} 
                   height={50} 
                   className="object-contain"
                 />
               </Link>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="mt-1 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </span>
                Office 4, Musaffah 37, Opp. Gift Action<br/>Abu Dhabi, UAE
              </p>
              <p className="flex items-center gap-3">
                <span className="text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </span>
                <a href="tel:+97125176889" className="hover:text-white transition-colors">+971 2 51 76889</a>, <a href="tel:+971501344537" className="hover:text-white transition-colors">+971 50 134 4537</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <a href="mailto:info@gulfresources.ae" className="hover:text-white transition-colors">info@gulfresources.ae</a>
              </p>
              <p className="flex items-center gap-3 text-gray-400">
                <span className="text-red-600">
                  <Clock className="w-5 h-5" />
                </span>
                <span>9:00 AM - 10:00 PM (Sun: Closed)</span>
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Follow Our Companies</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group transition-colors"
                  >
                    <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Companies */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Our Companies
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {DEFAULT_COMPANY_LINKS.map((company) => (
                <li key={company.key}>
                  <Link
                    href={company.href}
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRightIcon className="w-5 h-5 text-red-600 mt-0.5 transform group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-medium leading-tight">{company.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                   <ArrowRightIcon className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform" />
                   <span className="text-sm font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                   <ArrowRightIcon className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform" />
                   <span className="text-sm font-medium">About Us</span>
                </Link>
              </li>
              {DEFAULT_QUICK_LINKS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRightIcon className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Mobile Footer (Simplified) */}
      <div className="md:hidden px-6 py-12 space-y-10">
         {/* Brand */}
         <div className="space-y-4">
            <Link href="/">
              <Image 
                src="/webp/images/logo.webp" 
                alt="Gulf Resources Logo - Professional Services UAE" 
                width={140} 
                height={40} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted partner for business and manpower solutions in the UAE.
            </p>
         </div>

         {/* Links Grid */}
         <div className="grid grid-cols-1 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Our Companies</h4>
              <ul className="space-y-3">
                {DEFAULT_COMPANY_LINKS.map((company) => (
                  <li key={company.key}>
                    <Link href={company.href} className="text-gray-400 text-sm hover:text-red-500 block">
                      {company.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Office 4, Musaffah 37, Abu Dhabi</p>
                <p>+971 2 51 76889 | +971 50 134 4537</p>
                <p>info@gulfresources.ae</p>
                <p className="pt-2 text-red-500 font-semibold">9:00 AM - 10:00 PM (Sun: Closed)</p>
              </div>
            </div>
         </div>
         
         {/* Socials */}
         <div className="space-y-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Follow Us</p>
            <div className="flex flex-col gap-4">
               {socialLinks.map((social) => (
                 <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                   <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                     <social.icon className="w-4 h-4" />
                   </div>
                   <span className="text-sm font-medium">{social.label}</span>
                 </a>
               ))}
            </div>
         </div>
      </div>

      {/* 3. Copyright Bar */}
      <div className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-semibold">Gulf Resources</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link 
              href="/terms-of-use" 
              className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors duration-300 relative group"
            >
              Terms of Use
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
