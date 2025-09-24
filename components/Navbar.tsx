"use client";

import Link from "next/link";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState();

  const navs = [
    { id: "1", title: "HOME", link: "/" },
    { id: "2s", title: "ABOUT US", link: "/about" },
    { id: "3", title: "SERVICES", link: "/services" },
    { id: "4", title: "OUR COMPANIES", link: "/our-companies" },
    { id: "5", title: "CONTACT US", link: "/contact" },
  ];

  return (

    <div className="sticky top-0 bg-black/60 z-21">
    <div>
      <div className=" flex h-15 md:h-10   p-4 mx-0 lg:mx-auto max-w-7xl justify-between items-center">
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
      <div className=" mx-0 lg:mx-auto bg-white rounded-b-2xl max-w-7xl justify-center items-center">
        <nav className="m-auto  px-4 py-2  sticky top-0 ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex justify-center items-center gap-8">
              <div className="text-lg font-bold hover:text-green-500">
                Gulf Resources
              </div>
              <div className="hidden md:flex gap-4 justify-between text-[12px] font-bold ">
                
                {navs.map((item) => (
                  <Link  key={item.id} href={item.link}>
                    <div  className="hover:text-red-500">
                      {" "}
                      {item.title}{" "}
                    </div>
                    
                  </Link>
                ))}
              </div>
            </div>
            <button className="hidden md:flex bg-red-500 text-sm px-4 my-2 py-2 border-0 hover:bg-green-500 hover:text-black rounded-sm font-bold text-white">
              Contact us{" "}
            </button>
          </div>
        </nav>
      </div>
    </div>
    </div>
  );
}
