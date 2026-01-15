"use client";

import Link from "next/link";

import { SVGProps } from "react";
import RedParallelograms from "./Icons/RedParallelograms";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

// --- Type Definitions (Reusing the previous definitions for structure) ---
interface FooterLink {
  key: string;
  label: string;
  href: string;
  subList?: FooterLink[];
}



const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

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
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-0 0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8  pt-8 ">
          {/* Logo & Address (Col 1-4) */}
          <div className="col-span-full md:col-span-3 pr-10">
            {logo_address()}
          </div>

          {/* Quick Links and Company Links (Col 5-12) - Arranged in a flat list with Contact Us last */}
          <div className="col-span-full md:col-span-9 ">
            <div className="flex flex-col  mb-6 gap-4">
              <h4 className="text-lg md:text-xl font-bold">Quick Links</h4>
              <hr className="w-48 h-0.5 border-none bg-gradient-to-r from-red-600 via-red-600 to-[#1C1C1C]" />
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-12 ">
              {/* Render Links */}
              {DEFAULT_QUICK_LINKS.map((item) => (
                <div key={item.key} className="h-full w-full  text-white ">
                  <Link
                    href={item.href}
                    className="flex group gap-2 items-center justify-start hover:text-red-600 text-sm font-bold"
                  >
                    <ArrowRightIcon className="w-4 h-4 group-hover:text-red-600 " />
                    {item.label}
                  </Link>

                  <div className="h-full w-full flex flex-col mx-4 gap-4 mt-2">
                    {item.subList &&
                      item.subList.map((sItem) => (
                        <Link
                          key={sItem.key}
                          href={sItem.href}
                          className="flex group gap-2 pl-1  items-start text-sm font-bold justify-start hover:text-red-600"
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

      <div className=" md:hidden mx-12">
        <div className="flex flex-col gap-6 mb-16">
          {/* Render Links */}
          {DEFAULT_QUICK_LINKS.map((item) => (
            <div key={item.key} className="w-full text-white text-sm">
              <Link
                href={item.href}
                className={`flex group gap-2 items-center justify-start hover:text-red-600 text-sm font-bold`}
              >
                <ArrowRightIcon className="w-4 h-4 group-hover:text-red-600 " />
                {item.label}
              </Link>

              {item.subList && (
                <div className="w-full flex flex-col ml-6 gap-4 mt-2">
                  {item.subList.map((sItem) => (
                    <Link
                      key={sItem.key}
                      href={sItem.href}
                      className="flex group gap-2 pl-1 items-start text-sm font-bold justify-start hover:text-red-600"
                    >
                      {sItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {logo_address()}
      </div>

      {/* 3. Copyright Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between text-gray-400">
          <p className="mb-3 sm:mb-0 text-center text-sm font-medium">
            Copyright © Gulf Resources. All rights reserved 2025
          </p>
          <div className="space-x-6 text-center">
            <Link href="/terms-of-use" className="hover:text-red-600 transition text-sm font-bold">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-red-600 transition text-sm font-bold">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
