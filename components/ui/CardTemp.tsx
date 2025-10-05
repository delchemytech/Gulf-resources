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
    <div className=" bg-white flex flex-col rounded-lg max-w-xl drop-shadow-2xl text-sm  my-16">
      <img
        className="rounded-md min-w-lg max-h-50 w-full object-cover"
        src={ImageURL}
        alt="officeImage"
      />
      <div className="flex flex-col gap-4 p-4">
      <p className="text-gray-900 text-3xl font-semibold ml-2 mt-2">
        {title}
      </p>
      <p className="text-gray-500 mt-3 ml-2">
        {desc}
      </p>
      <PrimaryButton buttonText={buttonText} />
      </div>
    </div>
  );
}
