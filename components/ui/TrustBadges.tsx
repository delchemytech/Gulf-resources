import Image from "next/image";
import React from "react";
import type { LucideIcon } from 'lucide-react';

interface trustData {
    imageURL?: string;
    icon?: LucideIcon;
    title: string;
    desc: string;
}

const TrustBadges = ({ imageURL, icon: Icon, title, desc }: trustData) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-4 p-2 md:p-4">
      <div className="rounded-full p-3 md:p-4 bg-white drop-shadow-2xl">
        {Icon ? (
          <Icon className="h-8 w-8 md:h-12 lg:h-16 md:w-12 lg:w-16 text-red-600" strokeWidth={1.5} />
        ) : imageURL ? (
          <Image src={imageURL} alt="" height={50} width={50} className="h-8 w-8 md:h-12 lg:h-16 md:w-12 lg:w-16" />
        ) : null}
      </div>
      <h3 className="font-bold text-black text-lg md:text-xl text-center leading-tight px-1">{title}</h3>
      <p className="text-center text-sm md:text-base font-medium text-gray-600 leading-relaxed px-1">{desc}</p>
    </div>
  );
};

export default TrustBadges;
