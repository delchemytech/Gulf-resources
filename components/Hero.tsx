"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "./ui/PrimaryButton";
import RedParallelograms from "./Icons/RedParallelograms";

export default function hero() {
  return (
    <section className="h-screen bg-amber-400">
      <div className="relative w-full min-h-screen ">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={"/webp/hero_bg_optimized.webp"}
            fill
            alt={"Hero background"}
            priority
            className="object-cover z-0"
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src={"/webp/hero_bg_mobile.webp"}
            fill
            alt={"Hero background mobile"}
            priority
            className="object-cover z-0"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black/60 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent min-h-screen"></div>

        <main
          className=" container mx-auto relative p-4 md:p-8 z-20 h-screen flex flex-col justify-center 
        md:justify-start items-start max-w-7xl gap-8"
        >
          <div className=" h-full justify-center items-start flex flex-col  mt-[6.75rem]">
            <div className="flex items-center justify-center gap-2">
                     <RedParallelograms className="w-6 h-3 text-red-600" />
              <span className="text-red-600 text-xs md:text-sm font-bold uppercase tracking-wider">
                Your Trusted Partner in UAE & India
              </span> 
            </div>
            <div className="drop-shadow-lg">
              <div className="text-center md:text-start text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Specialized Services Across
              </div>

              <div className="text-center md:text-start text-green-300 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Facilities, Business Support & Travel
              </div>
            </div>
            <div className="py-8 text-center md:text-start text-white text-sm md:text-base font-medium max-w-3xl leading-relaxed drop-shadow-md">
              From seamless facilities management to strategic business support and premium travel services, we empower organizations across the UAE and India to achieve operational excellence and sustainable growth.
            </div>
          
          <div className="justify-center items-center md:items-start flex flex-col w-full mb-[2rem]">
            <div className="flex gap-4 w-full justify-center md:justify-start ">
              <PrimaryButton
                buttonText={"CONTACT US"}
                buttonHref="/contact-us"
                ButtonIcon={ArrowRightIcon}
              />
              {/* <PrimaryButton
                buttonText={"Our Services"}
                buttonHref="/services"
                ButtonIcon={ArrowRightIcon}
                primary={false}
              /> */}
            </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
