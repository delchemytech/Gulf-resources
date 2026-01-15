import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RevInSection = () => {
  return (
    <div className="relative z-20 flex flex-col gap-16 container mx-auto max-w-7xl w-full h-96 md:h-[500px] p-12 md:p-48 
     text-white items-center justify-center">
      <Image
        src={"/red_strip_bg.png"}
        fill
        alt={"background shades"}
        className="object-cover  -z-30"
      />
      <h2 className="md:text-5xl text-2xl text-center">
        Revolutionize your digital presence with our strategic services{" "}
      </h2>
      <div
        className="flex w-fit  bg-white p-4 text-black justify-center 
      items-center gap-2 rounded-md font-bold hover:bg-red-700 uppercase
    hover:shadow-2xl hover:text-gray-200 tracking-tight text-md transition-colors duration-200 "
      >
        <Link href="#" className="flex gap-2">
          {" "}
          READ DETAILS
          <ArrowRightIcon className="w-4 h-4 " />
        </Link>
      </div>
    </div>
  );
};

export default RevInSection;
