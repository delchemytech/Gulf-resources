"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function hero() {
  return (
      <div className="h-screen w-full top-0 flex items-start justify-start min-h-[680px] z-22 ">
        <Image
          src={"/bg.png"}
          fill
          alt={""}
          className="object-cover min-h-[680px]"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-gray-400/40  min-h-[680px]"></div>

        <main className="relative  p-4 md:p-16 lg:px-32 z-20 h-full flex flex-col justify-center md:justify-start items-center ">
          <div className="container mx-auto items-center mt-27">
            <div />
            <div className="py-8 text-center md:text-start text-white text-lg md:text-2xl font-extrabold">
              Most Innovative Business Solution
            </div>
            <div className="pt-4 text-center md:text-start text-white text-3xl md:text-5xl sm:text-4xl font-extrabold">
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
            <div className="pt-16 text-center md:text-start flex gap-4 justify-center md:justify-start">
              <button className="flex px-4 py-2 items-center gap-2 rounded-md font-bold hover:bg-red-700 hover:shadow-2xl hover:text-gray-200 bg-red-500 tracking-tight text-black text-[12px]">
                CONTACT WITH US
                <ArrowRightIcon className="h-4 w-4 text-black mr-2" />
              </button>
              <button className="px-4 py-2 rounded-md bg-green-500 text-black tracking-tight text-[12px] font-bold  hover:bg-green-700 hover:shadow-2xl hover:text-gray-200">
                OUR SERVICES
              </button>
            </div>
          </div>
        </main>
      </div>
  );
}
