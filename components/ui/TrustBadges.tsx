import Image from "next/image";
import React from "react";

interface trustData {
    imageURL:string;
    title:string;
    desc : string;
}


const TrustBadges = ({imageURL, title,desc}:trustData) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xs gap-4">
      <div className="rounded-full p-4 bg-white drop-shadow-2xl">
        <Image src={imageURL} alt="" height={50} width={50} className="h-16 w-16 md:h-24 md:w-24" />
      </div>
      <h3 className="font-bold text-black text-xl text-center">{title}</h3>
      <p className="text-center text-base max-w-sm font-light text-gray-600"> {desc}</p>
    </div>
  );
};

export default TrustBadges;
