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
          className="w-full h-[200px]"
          alt={imageAlt}
        />
      </div>
      <div className="w-full px-5 group-hover:bg-red-600">
        <div className="relative py-5">
          <div className="-mt-[53px] w-fit bg-white p-2 rounded-xl">
            <Image src="/c1.svg" height={50} width={50} alt="svg " />
          </div>
          <div className="w-full flex flex-col gap-y-4 py-5">
            <h3 className="text-2xl font-semibold "> {title}</h3>
            <hr className='border-gray-400 border-t-[1px]'/>
            <p className='text-gray-500 group-hover:text-gray-100'>{description}</p>
          </div>
          <Link href={companyLink} className='flex items-center gap-x-2 font-bold mb-8'>
            
            view details 
          <ArrowRightIcon className='w-4 h-4'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyCardNew
