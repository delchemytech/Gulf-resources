"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";

export default function hero() {
  return (
    <section className="h-full bg-amber-400">
      <div className="relative h-max w-full top-0 flex items-start justify-start min-h-screen z-22 ">
        <Image
          src={"/bg.png"}
          fill
          alt={""}
          priority
          className="object-cover z-0 "
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-gray-400/40  min-h-screen"></div>

        <main
          className="container mx-auto relative p-4 md:p-16 lg:px-16 z-20 h-full flex flex-col justify-center 
        md:justify-start items-start max-w-7xl gap-8"
        >
          <div className="justify-start flex flex-col  mt-27">
            <div />
            <div className="text-center md:text-start text-white text-lg md:text-2xl font-extrabold">
              Most Innovative Business Solution
            </div>
            <div className="text-center md:text-start text-white text-3xl md:text-5xl sm:text-4xl font-extrabold">
              Solution Provider to Your
            </div>
            <div className=" text-center md:text-start text-green-300 text-4xl md:text-5xl font-extrabold">
              Business Challenges
            </div>
            <div className="py-8 text-center md:text-start text-white text-sm font-bold max-w-3xl">
              We specialize in providing comprehensive solutions to help
              businesses tackle their most pressing issues and unlock new
              opportunities for growth.
            </div>
            <div className="text-center md:text-start flex gap-4 justify-center md:justify-start">
              <PrimaryButton
                buttonText={"CONTACT WITH us"}
                buttonHref="/contact"
                ButtonIcon={ArrowRightIcon}
              />
              <SecondaryButton buttonText="our services" buttonHref="/about" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
