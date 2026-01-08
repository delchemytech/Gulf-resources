"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";
import { usePathname } from "next/navigation";

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

/** Defines the structure for a single menu item. */
interface NavItem {
  label: string;
  href: string;
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Facilities Management", href: "/our-companies/facilities-management" },
  { label: "Gulf Track Typing", href: "/our-companies/business-setup&visa-work" },
  { label: "Gulf Track Travels", href: "/our-companies/tours-and-travels" },
];

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-800"
  >
    {/* Toggle based on isOpen state */}
    <path d={isOpen ? "M18 6L6 18" : "M3 12h18"} />
    <path d={isOpen ? "M6 6L18 18" : "M3 6h18"} />
    <path d={isOpen ? "M6 6L18 18" : "M3 18h18"} />
  </svg>
);

interface MobileNavProps {
  items: NavItem[];
  currentPath: string;
  closeMenu: () => void;
}

const MobileNav = ({ items, currentPath, closeMenu }: MobileNavProps) => {
  const getLinkClasses = (href: string) => {
    return `block w-full py-3 px-4 font-bold transition duration-150 rounded-lg 
            ${
              currentPath === href
                ? "text-red-600 bg-red-50 font-bold"
                : "text-gray-800 hover:bg-gray-100"
            }`;
  };

  return (
    <div className="flex flex-col space-y-1 text-base">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={getLinkClasses(item.href)}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only attach the listener if the menu is open
    if (!isMenuOpen) return;

    function handleClickOutside(event: MouseEvent) {
      // Check if the menuRef exists and the click is outside the menu drawer
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts or isMenuOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 z-50 w-screen justify-center transition-all duration-300 ${
      isScrolled 
        ? "bg-gray-900/95 shadow-lg backdrop-blur-md" 
        : "bg-white/0 shadow-2xl backdrop-blur-sm"
    }`}>
      <div className={`hidden md:flex h-10 p-4 mx-0 lg:mx-auto max-w-7xl justify-between items-center transition-all duration-300 ${
        isScrolled ? "h-8" : "h-10"
      }`}>
        <div className="flex text-sm font-medium md:text-base justify-center">
          <div className="flex px-4 text-white border-x-1 items-center">
            <PhoneIcon className="h-4 w-4 text-red-500 mr-2" />
            +971 2 5555523, +971 2 5522533
          </div>
          <div className="flex px-4 text-white border-x-1 items-center">
            <MapPinIcon className="h-4 w-4 text-red-500 mr-2" />
            Abu Dhabi, UAE
          </div>
          <div className="flex px-4 text-white border-x-1 items-center">
            <EnvelopeIcon className="h-4 w-4 text-red-500 mr-2" />
            info@gulfresources.ae
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white hover:text-red-500 transition"
            >
              <social.icon className="w-4 h-4" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>

      <nav ref={menuRef}>
        <div
          
          className="container mx-auto px-4 py-1 flex max-w-7xl bg-white rounded-b-xl 
      justify-between items-center"
        >
          <div className="flex gap-4 py-2 items-center">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={128}
                height={32}
              />
            </Link>
            <div className="hidden md:flex gap-6 h-full items-center">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-gray-900 hover:text-red-500 px-3 py-2 hover:bg-gray-100 text-sm font-bold transition-colors whitespace-nowrap ${
                    currentPath === item.href
                      ? "font-bold text-red-600"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex">
            <CTAButton buttonText="Contact Us" buttonColorClass="bg-red-500" />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle Navigation"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
        <div
          className={`md:hidden fixed top-[64px] left-0 w-full 
                      bg-white backdrop-blur-sm shadow-xl transition-all duration-300 ease-in-out
                      ${
                        isMenuOpen
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
        >
          <div className="p-4 flex flex-col space-y-4">
            <MobileNav
              items={NAV_ITEMS}
              currentPath={currentPath}
              closeMenu={() => setIsMenuOpen(false)}
            />
            <div className="pt-4 border-t border-gray-100">
              <CTAButton
                buttonText="Contact Us"
                buttonColorClass="bg-red-500"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
