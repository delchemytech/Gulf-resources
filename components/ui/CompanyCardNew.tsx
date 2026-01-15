import { ArrowRightIcon } from '@heroicons/react/24/solid';
import NextImage from 'next/image'
import Link from 'next/link';
import React from 'react'
import type { LucideIcon } from 'lucide-react';


interface ServiceCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    description: string;
    companyLink: string;
    Icon?: LucideIcon;
  }

  
const CompanyCardNew = ({
    imageUrl,
    imageAlt,
    title,
    subtitle,
    description,
    companyLink,
    Icon,
  }: ServiceCardProps) => {
  return (
    <div className="rounded-2xl flex flex-col shadow-2xl group hover:text-white h-full bg-white overflow-visible">
      {/* Image Container with Icon Overlay */}
      <div className="relative w-full h-48 md:h-56 overflow-visible">
        <div className="w-full h-full overflow-hidden rounded-t-2xl">
          <NextImage
            src={imageUrl}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt={imageAlt}
          />
        </div>
        {/* Icon positioned at bottom-left, overlapping into content area */}
        <div className="absolute -bottom-10 left-5 w-fit bg-white p-4 rounded-xl shadow-lg z-10">
          {Icon ? (
            <Icon className="h-10 w-10 md:h-14 md:w-14 text-red-600" strokeWidth={1.5} />
          ) : (
            <NextImage src="/c1.svg" alt="svg" width={56} height={56} className='h-10 w-10 md:h-14 md:w-14'/>
          )}
        </div>
      </div>
      
      {/* Content Container - Flex grow to fill remaining space */}
      <div className="w-full px-5 pt-14 pb-6 group-hover:bg-red-600 flex-1 flex flex-col transition-colors duration-300 rounded-b-2xl">
        <div className="flex flex-col items-center md:items-start flex-1">
          <div className="w-full flex flex-col gap-y-3 flex-1">
            <div className="min-h-[70px]">
              <h3 className="text-lg md:text-xl w-full text-black font-bold text-center md:text-start group-hover:text-white leading-tight">{title}</h3>
              {subtitle && (
                <p className="text-sm md:text-base text-red-600 font-bold text-center md:text-start mt-1 group-hover:text-red-200">{subtitle}</p>
              )}
            </div>
            <hr className='border-gray-300 border-t-[1px]'/>
            <p className='text-gray-500 group-hover:text-gray-100 text-sm md:text-base text-center md:text-start line-clamp-4'>{description}</p>
          </div>
          
          <Link href={companyLink} className='flex items-center text-black gap-x-2 font-bold mt-4 group-hover:text-white'>
            View Details 
            <ArrowRightIcon className='w-4 h-4'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyCardNew
