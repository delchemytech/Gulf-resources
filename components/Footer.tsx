"use client";

import Link from "next/link";

import { SVGProps } from "react";
import RedParallelograms from "./Icons/RedParallelograms";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// --- Type Definitions (Reusing the previous definitions for structure) ---
interface FooterLink {
  key: string;
  label: string;
  href: string;
  subList?: FooterLink[];
}

// --- Helper Icon Component (Red Arrow) ---
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className="w-3 h-3 text-red-600 mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
  </svg>
);

const Footer = () => {
  const DEFAULT_COMPANY_LINKS: FooterLink[] = [
    {
      key: "31",
      label: "Gulf Resources Facilities Management",
      href: "/our-company/company-a",
    },
    {
      key: "32",
      label: "Gulf Track Business Setup & Visa Works",
      href: "/our-company/company-c",
    },
    {
      key: "33",
      label: "Gulf Track Tours & Travels",
      href: "/our-company/company-e",
    },
  ];

  // Default links data (can be imported from lib/data/constants.js in a real app)
  const DEFAULT_QUICK_LINKS: FooterLink[] = [
    { key: "1", label: "About Us", href: "/about" },
    { key: "2", label: "Services", href: "/services" },
    {
      key: "3",
      label: "Our Companies",
      href: "/our-company",
      subList: DEFAULT_COMPANY_LINKS,
    },
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
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-4xl font-bold mb-4 leading-snug">
              Ready to Partner with Excellence?
            </h3>
            <p className="text-gray-400 max-w-lg text-lg">
              Join hundreds of satisfied clients who trust Gulf Resources for
              their business solutions. Let's discuss how we can support your
              success.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3
             bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition 
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-0 0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10  pt-8 ">
          {/* Logo & Address (Col 1-4) */}
          <div className="col-span-full md:col-span-4 pr-10">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                {/* Logo Accent and Text */}
                <RedParallelograms className="w-8 h-4 text-red-600 mr-2" />
                <span className="text-3xl font-bold">Logo</span>
              </div>

              {/* Horizontal rule below the logo text */}
              <hr className="w-48 h-0.5 border-none bg-gradient-to-r from-red-600 via-red-600 to-[#1C1C1C]" />
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              1234, Restaurant St, South City <br />
              New York 0124
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {/* Social Icons based on the image */}
              <a
                href="#"
                className="h-9 w-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
              >
                F
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
              >
                T
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <svg
                  className="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.99 0a7 7 0 01-5.75 11.2V16H10v-4.8h-.25A7 7 0 010 0h3.5v7h3.5V0h3.5v7h3.5V0z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <svg
                  className="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 14.5v-5l6 2.5-6 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links and Company Links (Col 5-12) - Arranged in a flat list with Contact Us last */}
          <div className="col-span-full md:col-span-8">
            <div className="flex flex-col  mb-6 gap-4">
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <hr className="w-48 h-0.5 border-none bg-gradient-to-r from-red-600 via-red-600 to-[#1C1C1C]" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-x-4 gap-y-6">
              {/* Render Links */}
              {DEFAULT_QUICK_LINKS.map((item) => (
                <div
                  key={item.key}
                  className="h-full w-full  text-white "
                >
                  <Link
                    href={item.href}
                    className="flex group gap-2 items-center justify-start hover:text-red-600"
                  >
                    <ArrowRightIcon className="w-4 h-4 group-hover:text-red-600" />
                    {item.label}
                  </Link>

                  <div className="h-full w-full flex flex-col gap-2 mt-2">
                  {item.subList && item.subList.map((sItem)=>(
                     <Link key={sItem.key}
                     href={sItem.href}
                     className="flex group gap-2 items-center text-base justify-start hover:text-red-600"
                   >
                     {sItem.label}
                   </Link>
                

                  ))}   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Copyright Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between text-xs text-gray-400">
          <p className="mb-3 sm:mb-0">
            Copyright © Gulf Resources. All rights reserved 2025
          </p>
          <div className="space-x-6">
            <Link href="#" className="hover:text-red-600 transition">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-red-600 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
