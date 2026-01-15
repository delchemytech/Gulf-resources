import Image from "next/image";
import PrimaryButton from "./PrimaryButton"

interface cardData{
    ImageURL ?: string;
    title?:string;
    desc?:string;
    points?:string[];
    buttonText?:string;
    show_button?:boolean;
}

export default function CardTemp({ImageURL="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
title='Its the title',desc=``,points,buttonText="VIEW DETAILS",show_button=true }:cardData) {

  return (
    <div
      className="bg-white flex flex-col rounded-b-lg md:rounded-lg w-36 md:w-md 
    lg:w-lg drop-shadow-lg text-sm md:pb-2 transition-all duration-300 ease-in-out 
    hover:shadow-2xl hover:-translate-y-2 group"
    >
      <div className="relative overflow-hidden">
        <Image
          className="rounded-md md:w-md lg:w-lg h-30 md:h-72 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          width={207}
          height={425}
          src={ImageURL}
          alt="officeImage"
        />
        {/* Black gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-b-md" />
      </div>
      <div className="flex flex-col justify-start pt-2 md:p-4">
        <p className="text-gray-900 text-[10px] md:text-3xl text-center md:text-start p-2 font-semibold ml-1 md:ml-2 mt-1 md:mt-2 leading-none">
          {title}
        </p>
        {desc && <p className="hidden md:flex text-gray-600 text-sm mt-2 ml-2">{desc}</p>}
        {points && points.length > 0 && (
          <ul className="hidden md:flex flex-col space-y-1 mt-2 ml-2 text-gray-500 text-sm">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-600 mr-2 mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {show_button && (
          <div className="hidden ml-1 md:ml-2  md:flex justify-start">
            <PrimaryButton buttonText={buttonText} />
          </div>
        )}
        {!show_button && <div className="m-1"></div>}
      </div>
    </div>
  );
}
