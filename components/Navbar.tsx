"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";
import { usePathname } from "next/navigation";

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

/** Defines the structure for a single menu item, which can recursively contain children. */
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** Props for the main Navbar component. We only need the current path for active state. */
interface NavbarProps {
  currentPath: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  {
    label: "OUR COMPANIES",
    href: "/our-companies",
    children: [
      {
        label: "Gulf Resources Facility Management",
        href: "/our-companies/c1",
      },
      {
        label: "Gulf Track Business Setup & Visa Works",
        href: "/our-companies/c2",
      },
      { label: "Gulf Track Tours & Travels", href: "/our-companies/c3" },
    ],
  },
];
const ChevronDownIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`ml-1 transition-transform duration-300 ${
      isActive ? "rotate-180" : "rotate-0"
    }`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

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
  // State to track which parent menu is open by index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getParentLinkClasses = (href: string) => {
    const isActiveParent =
      currentPath === href || currentPath.startsWith(href + "/");
    return `flex justify-between items-center w-full py-3 px-4 font-medium transition duration-150 rounded-lg 
            ${
              isActiveParent
                ? "text-red-600 bg-red-50 font-bold"
                : "text-gray-800 hover:bg-gray-100"
            }`;
  };

  const getChildLinkClasses = (href: string) => {
    return `block w-full py-2 pl-8 pr-4 text-sm transition duration-150 
            ${
              currentPath === href
                ? "text-red-600 font-semibold bg-red-100/50"
                : "text-gray-600 hover:bg-gray-100"
            }`;
  };

  return (
    <div className="flex flex-col space-y-1 text-base">
      {items.map((item, index) => (
        <div key={index}>
          {item.children && item.children.length > 0 ? (
            /* Parent with Children (Accordion Item) */
            <>
              <button
                onClick={() => toggleDropdown(index)}
                className={getParentLinkClasses(item.href)}
              >
                <span>{item.label}</span>
                <ChevronDownIcon isActive={openIndex === index} />
              </button>

              {/* Children Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 
                                    ${
                                      openIndex === index
                                        ? "max-h-96 py-1"
                                        : "max-h-0"
                                    }`}
              >
                <div className="flex flex-col space-y-1 border-l-2 border-red-300 ml-4">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href}
                      className={getChildLinkClasses(child.href)}
                      onClick={closeMenu} // Close menu on sub-item click
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Simple Link */
            <Link
              href={item.href}
              className={getParentLinkClasses(item.href)}
              onClick={closeMenu} // Close menu on top-level click
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

interface NavLinkWithDropdownProps {
  item: NavItem;
  currentPath: string;
}
const NavLinkWithDropdown = ({
  item,
  currentPath,
}: NavLinkWithDropdownProps) => {
  // Check if the current path exactly matches the item or starts with the item's base path
  const isActiveParent =
    currentPath === item.href || currentPath.startsWith(item.href + "/");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to check if a path is active or belongs to the current parent group
  const getLinkClasses = (href: string) => {
    return `py-2 transition duration-150 rounded-lg whitespace-nowrap px-3 py-2 text-sm 
              ${
                currentPath === href
                  ? "font-bold text-red-600 bg-red-50"
                  : "text-gray-700 hover:bg-gray-200 hover:text-red-500"
              }`;
  };

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {/* PARENT LINK with ICON */}
      <Link
        href={item.href}
        className={`flex items-center text-gray-800 transition py-2 
            ${
              isActiveParent
                ? "font-bold text-red-600" // Active parent link style
                : "hover:text-red-600" // Inactive parent link style
            }`}
      >
        {item.label}
        <ChevronDownIcon isActive={isDropdownOpen} />
      </Link>

      {/* DROPDOWN CONTAINER */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-0.5 
                     transition-all duration-300 origin-top ${
                       isDropdownOpen
                         ? "opacity-100 visible scale-y-100"
                         : "opacity-0 invisible scale-y-0"
                     } 
                     min-w-[200px]`}
      >
        {/* DROPDOWN CONTENT BOX: Uses the same blurred style as the Navbar */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-2 flex flex-col space-y-1 border border-gray-100">
          {item.children?.map((child, index) => (
            <Link
              key={index}
              href={child.href}
              className={getLinkClasses(child.href)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuRef = useRef<HTMLDivElement>(null);

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
    <div className=" fixed top-0 left-0 z-50 bg-white/0 shadow-2xl backdrop-blur-sm w-screen justify-center">
      <div className="hidden md:flex h-15 md:h-5   p-4 mx-0 lg:mx-auto max-w-7xl justify-between items-center">
        <div className="flex text-[12px] font-light md:text-sm justify-center">
          <div className="flex px-4 text-white border-x-1">
            <PhoneIcon className="h-4 w-4 text-red-500 mr-2" />
            +971 2 5555523, +971 2 5522533
          </div>
          <div className="flex px-4 text-white border-x-1 ">
            <MapPinIcon className="h-4 w-4 text-red-500 mr-2" />
            Abu Dhabi, UAE
          </div>
          <div className="flex px-4 text-white border-x-1 ">
            <EnvelopeIcon className="h-4 w-4 text-red-500 mr-2" />
            info@gulfresources.ae
          </div>
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
            <div className="hidden md:flex gap-4 h-full items-center">
              {NAV_ITEMS.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <NavLinkWithDropdown
                      currentPath={currentPath}
                      item={item}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-gray-900 hover:text-red-500 p-2 hover:bg-gray-100 text-sm ${
                        currentPath === item.href
                          ? "font-bold text-red-600"
                          : ""
                      }`}
                    >
                      {" "}
                      {item.label}
                    </Link>
                  )}
                </div>
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
