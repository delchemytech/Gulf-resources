import React from 'react'
import RedParallelograms from '../Icons/RedParallelograms';

export interface headerData  {
    title:string;
    tagline : string;
    bodyText : string;

}

const HeaderWithDescription = ({title,tagline,bodyText}:headerData) => {


  return  (
        <div className="max-w-3xl  py-8 sm:py-8 md:py-4">
          {/* Red Tagline/Header with Red Bars */}
          <div className="flex items-center  mb-4">
            {/* Small Red Bars (Matching the design) */}
            <RedParallelograms className='w-8 h-4 ' />
            <p className="text-base font-semibold tracking-wider uppercase text-red-600">
              {tagline}
            </p>
          </div>
    
          {/* Main Title */}
          <h2 className="text-5xl   font-extrabold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
    
          {/* Body Text */}
          <p className="text-base  text-gray-600 leading-relaxed">
            {bodyText}
          </p>
        </div>
      );
}

export default HeaderWithDescription
