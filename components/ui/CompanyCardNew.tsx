import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


interface ServiceCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    companyLink: string;
  }

  
const CompanyCardNew = ({
    imageUrl,
    imageAlt,
    title,
    description,
    companyLink,
  }: ServiceCardProps) => {
  return (
    <div className="rounded-2xl flex flex-col shadow-2xl overflow-hidden group hover:text-white">
      <div>
        <Image
          src={imageUrl}
          height={200}
          width={100}
          className="w-full h-32 md:h-64"
          alt={imageAlt}
        />
      </div>
      <div className="w-full px-5 group-hover:bg-red-600">
        <div className="flex flex-col md:py-5 items-center md:items-start">
          <div className="-mt-[53px] w-fit bg-white p-2 rounded-xl">
            <img src="/c1.svg"  alt="svg" className='h-10 w-10 md:h-20 md:w-20'/>
          </div>
          <div className="w-full flex flex-col gap-y-4 py-5">
            <h3 className="text-base md:text-2xl w-full md:max-w-4/5 text-black font-semibold text-center md:text-start"> {title}</h3>
            <hr className='border-gray-400 border-t-[1px]'/>
            <p className='text-gray-500 group-hover:text-gray-100 text-xs md:text-base text-center md:text-start'>{description}</p>
          </div>
          <Link href={companyLink} className='flex items-center text-black gap-x-2 font-bold mb-8'>
            view details 
          <ArrowRightIcon className='w-4 h-4'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyCardNew
