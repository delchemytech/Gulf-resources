import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { ArrowRightIcon, MapPin, Phone } from 'lucide-react';

interface ServiceCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    companyLink: string;
  }

  const officeInfo = [
    {
      icon: Phone,
      title: 'Phone Number & Email',
      content: (
        <>
          <p>+(310) 2591 21563</p>
          <p className="text-red-500 group-hover:text-gray-300">help-bizani@gmail.com</p>
        </>
      ),
    },
    {
      icon: MapPin,
      title: 'Our Office Address',
      content: (
        <p>
          258 Dancing Street, Miland Line,
          <br />
          HUYI 21563, New York
        </p>
      ),
    },
   
  ];

const CompanyContactsCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  companyLink,
}: ServiceCardProps) => {
  return (
    <div className="rounded-2xl flex flex-col w-xs  md:max-w-sm shadow-2xl overflow-hidden group hover:text-white">
      <div>
        <Image
          src={imageUrl}
          height={200}
          width={100}
          className="w-full h-36 md:h-64"
          alt={imageAlt}
        />
      </div>
      <div className="w-full px-5 bg-gray-100 group-hover:bg-red-600">
        <div className="flex flex-col md:py-5 items-center md:items-start">
          <div className="-mt-[53px] w-fit bg-white p-2 rounded-xl">
            <img src="/c1.svg"  alt="svg" className='h-10 w-10 md:h-20 md:w-20'/>
          </div>
          <div className="w-full flex flex-col gap-y-4 py-5">
          <div className="space-y-6">
          <h3 className="text-base md:text-2xl w-full md:max-w-4/5 text-black font-semibold text-center md:text-start"> {title}</h3>
            <hr className='border-gray-400 border-t-[1px]'/>
                {officeInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Icon Container (Red Circle) */}
                    <div className="flex-shrink-0 w-10 h-10 p-2 bg-white goup- bg-opacity-10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-red-600 " />
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <div className="text-gray-600 group-hover:text-white text-sm mt-1">{item.content}</div>
                    </div>
                  </div>
                ))}
                </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyContactsCard
