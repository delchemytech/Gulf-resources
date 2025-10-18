"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";

export default function hero() {
  return (
    <section className="h-screen bg-amber-400">
      <div className="relative w-full min-h-screen ">
        <Image
          src={"/bg.png"}
          fill
          alt={"Hero background"}
          priority
          className="object-cover z-0 "
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-gray-400/40  min-h-screen"></div>

        <main
          className=" container mx-auto relative p-4 md:p-8 z-20 h-screen flex flex-col justify-center 
        md:justify-start items-start max-w-7xl gap-8"
        >
          <div className=" h-full justify-center items-start flex flex-col  mt-[6.75rem]">
            <div className="text-center md:text-start text-red-100 text-base md:text-xl font-extrabold">
              Most Innovative Business Solution
            </div>
            <div>
            <div className="text-center md:text-start text-white text-4xl sm:text-6xl md:text-7xl font-extrabold">
              Solution Provider to Your
            </div>
            
            <div className=" text-center md:text-start text-green-300 text-3xl sm:text-4xl md:text-6xl font-extrabold">
              Business Challenges
            </div>
            </div>
            <div className="py-8 text-center md:text-start text-white text-sm md:text-base font-bold max-w-3xl leading-normal">
              We specialize in providing comprehensive solutions to help
              businesses tackle their most pressing issues and unlock new
              opportunities for growth.
            </div>
            
          </div>
          <div className="justify-center items-start flex flex-col  mb-[2rem]">
          <div className="flex gap-4 ">
              <PrimaryButton
                buttonText={"CONTACT WITH US"}
                buttonHref="/contact"
                ButtonIcon={ArrowRightIcon}
                
              />
              <PrimaryButton
                buttonText={"Our Services"}
                buttonHref="/contact"
                ButtonIcon={ArrowRightIcon}
                primary = {false}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
