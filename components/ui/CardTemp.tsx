import Image from "next/image";
import PrimaryButton from "./PrimaryButton"

interface cardData{
    ImageURL ?: string;
    title?:string;
    desc?:string;
    buttonText?:string
}

export default function CardTemp({ImageURL="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
title='Its the title',desc=``,buttonText="VIEW DETAILS"}:cardData) {

  return (
    <div className=" bg-white flex flex-col rounded-b-lg md:rounded-lg w-36 md:w-md 
    lg:w-lg drop-shadow-lg text-sm  md:pb-2">
      <Image
        className="rounded-md md:w-md lg:w-lg h-30 md:h-72 w-full object-cover"
        width={207}
        height={425}
        src={ImageURL}
        alt="officeImage"
      />
      <div className="flex flex-col justify-start gap-4 pt-2 md:p-4">
      <p className="text-gray-900 text-[10px] md:text-3xl text-center md:text-start p-2 h-12 font-semibold ml-1 md:ml-2 mt-1 md:mt-2 leading-tight">
        {title}
      </p>
      <p className="hidden md:flex text-gray-500 mt-3 ml-2">
        {desc}
      </p>
      <div className="hidden ml-1 md:ml-2  md:flex justify-start">
      <PrimaryButton buttonText={buttonText} />
      </div>
      </div>
    </div>
  );
}
