import Link from "next/link";
import React from "react";

interface buttonContent {
  buttonText: string;
  ButtonIcon?: React.ElementType;
  buttonHref?: string;
  primary?:boolean;
}

const PrimaryButton = ({
  buttonText,
  ButtonIcon,
  buttonHref = "#", primary = true
}: buttonContent) => {
  return (
    <Link href={buttonHref} className='flex gap-2'>
    <div
       className={`flex items-center justify-center gap-2 w-fit
       text-white
      py-3 px-6 rounded-md 
      font-semibold uppercase tracking-wide text-sm md:text-base
      transition-all duration-300 ease-in-out 
      ${primary?"hover:bg-red-700 bg-red-600":"hover:bg-green-700 bg-green-600"}
      hover:shadow-lg hover:shadow-red-500/50
      transform hover:scale-[1.02] cursor-pointer` }
    >
      
        {/* Text passed via prop */}
        <span className="md:text-nowrap">{buttonText}</span>

        {/* Conditional Rendering: Only render the icon if the 'Icon' prop exists */}
        {ButtonIcon && <ButtonIcon className="hidden md:flex w-4 h-4  " />}
      
    </div></Link>
  );
};

export default PrimaryButton;
