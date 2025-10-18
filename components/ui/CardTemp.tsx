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
    <div className=" bg-white flex flex-col rounded-b-lg md:rounded-lg w-36 md:w-md lg:w-lg drop-shadow-2xl text-sm  md:pb-4">
      <Image
        className="rounded-md md:w-md lg:w-lg h-26 md:max-h-50 w-full object-cover"
        src={ImageURL}
        alt="officeImage"
      />
      <div className="flex flex-col justify-start gap-4 p-2 md:p-4">
      <p className="text-gray-900 text-xs md:text-3xl  h-12 font-semibold ml-1 md:ml-2 mt-1 md:mt-2 leading-tight">
        {title}
      </p>
      <p className="hidden md:flex text-gray-500 mt-3 ml-2">
        {desc}
      </p>
      <div className="hidden md:flex justify-center">
      <PrimaryButton buttonText={buttonText} />
      </div>
      </div>
    </div>
  );
}
