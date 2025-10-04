
import Link from 'next/link';
import React from 'react'

interface buttonContent{
    buttonText : string;
    ButtonIcon?: React.ElementType;
    buttonHref?:string;

}

const PrimaryButton = ({
  buttonText,
  ButtonIcon,
  buttonHref = "#",
}: buttonContent) => {
  return (
    <div
      className="flex w-fit  bg-red-600 p-4 text-white justify-center 
      items-center gap-2 rounded-md font-bold hover:bg-red-700 uppercase
    hover:shadow-2xl hover:text-gray-200 tracking-tight text-md transition-colors duration-200 "
    >
      <Link href={buttonHref} className='flex gap-2'>
        {/* Text passed via prop */}
        {buttonText}

        {/* Conditional Rendering: Only render the icon if the 'Icon' prop exists */}
        {ButtonIcon && <ButtonIcon className="w-4 h-4 " />}
      </Link>
    </div>
  );
};

export default PrimaryButton
