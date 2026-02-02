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
  { icon: Instagram, href: "https://www.instagram.com/gulf_resourcesfacilities?igsh=MXBoM3N3OWpqbzlsMQ==", label: "Gulf Resources Instagram" },
  { icon: Instagram, href: "https://www.instagram.com/gulftracktyping_services_2024?igsh=YWNkd2I0Z2Y5ODNu", label: "Gulf Track Instagram" },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
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
        : "bg-gradient-to-b from-black/80 to-transparent"
    }`}>
      {/* Top Bar - Contact & Socials */}
      <div className={`hidden md:flex justify-center transition-all duration-300 border-b border-white/10 ${
        isScrolled ? "h-10 bg-black/20" : "h-12"
      }`}>
        <div className="flex w-full max-w-7xl justify-between items-center px-4">
          
          {/* Contact Info */}
          <div className="flex text-xs lg:text-sm font-medium items-center gap-6 text-gray-200">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <PhoneIcon className="h-4 w-4 text-red-500" />
              <div className="flex gap-2">
                <a href="tel:+97125176889" className="hover:text-red-400 transition">+971 2 51 76889</a>
                <span className="text-gray-600">|</span>
                <a href="tel:+971501344537" className="hover:text-red-400 transition">+971 50 134 4537</a>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 hover:text-white transition-colors">
              <MapPinIcon className="h-4 w-4 text-red-500" />
              <span>Office 4, Musaffah 37, Abu Dhabi</span>
            </div>
            
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <EnvelopeIcon className="h-4 w-4 text-red-500" />
              <a href="mailto:info@gulfresources.ae" className="hover:text-red-400 transition">info@gulfresources.ae</a>
            </div>
          </div>
          
          {/* Social Media Links with Labels */}
          <div className="flex items-center gap-4 text-xs font-medium text-gray-300">
            <span className="hidden lg:inline text-gray-200 uppercase tracking-wider text-[10px]">Follow Us:</span>
            
            <a
              href="https://www.instagram.com/gulf_resourcesfacilities?igsh=MXBoM3N3OWpqbzlsMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white group transition-colors"
              title="Gulf Resources Facilities Management"
            >
              <Instagram className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-red-400 transition-colors">Gulf Resources</span>
            </a>

            <div className="h-3 w-px bg-gray-700"></div>

            <a
              href="https://www.instagram.com/gulftracktyping_services_2024?igsh=YWNkd2I0Z2Y5ODNu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white group transition-colors"
              title="Gulf Track Typing Services"
            >
              <Instagram className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-red-400 transition-colors">Gulf Track</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav ref={menuRef} className={`transition-all duration-300 ${isScrolled ? "py-0" : "py-2"}`}>
        <div className={`container mx-auto px-6 flex max-w-7xl justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? "bg-white backdrop-blur-md shadow-md rounded-none h-16" 
            : "bg-white shadow-2xl rounded-2xl h-20 mt-2"
        }`}>
          
          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src="/webp/images/logo.webp"
              alt="Gulf Resources Logo"
              width={160}
              height={45}
              className="object-contain w-32 md:w-40"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group ${
                  currentPath === item.href
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
                {currentPath === item.href && (
                  <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <CTAButton buttonText="Contact Us" buttonColorClass="bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/30" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden fixed top-[80px] left-0 w-full 
                      bg-white/95 backdrop-blur-md shadow-xl border-t bg-white/95 transition-all duration-300 ease-in-out z-40
                      ${
                        isMenuOpen
                          ? "max-h-[80vh] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
                      }`}
        >
          <div className="p-6 flex flex-col space-y-6">
            <MobileNav
              items={NAV_ITEMS}
              currentPath={currentPath}
              closeMenu={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Socials */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Follow Us</p>
               <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/gulf_resourcesfacilities?igsh=MXBoM3N3OWpqbzlsMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                      <Instagram className="w-4 h-4" />
                    </div>
                    Gulf Resources
                  </a>
                  <a
                    href="https://www.instagram.com/gulftracktyping_services_2024?igsh=YWNkd2I0Z2Y5ODNu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-gray-700"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                      <Instagram className="w-4 h-4" />
                    </div>
                    Gulf Track
                  </a>
               </div>
            </div>

            <div className="pt-2">
              <CTAButton
                buttonText="Contact Us"
                buttonColorClass="bg-red-600 w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
