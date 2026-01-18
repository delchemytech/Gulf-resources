import NextImage from 'next/image';
import { MapPin, Phone, Clock, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    companyLink: string;
    Icon?: LucideIcon;
    phone: string;
    phone2?: string;
    email: string;
    address: string;
    hours?: string;
  }

const CompanyContactsCard = ({
  imageUrl,
  imageAlt,
  title,
  Icon,
  phone,
  phone2,
  email,
  address,
  hours,
}: ServiceCardProps) => {
  const officeInfo = [
    {
      icon: Phone,
      title: 'Phone Number & Email',
      content: (
        <>
          <p><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
          {phone2 && <p><a href={`tel:${phone2.replace(/\s/g, '')}`}>{phone2}</a></p>}
          <p className="text-red-500 group-hover:text-gray-300"><a href={`mailto:${email}`}>{email}</a></p>
        </>
      ),
    },
    {
      icon: MapPin,
      title: 'Our Office Address',
      content: <p>{address}</p>,
    },
    ...(hours ? [{
      icon: Clock,
      title: 'Office Hours',
      content: <p>{hours}</p>,
    }] : []),
  ];
  
  return (
    <div className="rounded-2xl flex flex-col shadow-2xl overflow-hidden group hover:text-white h-full">
      <div className="relative w-full h-36 md:h-64 overflow-visible">
        <NextImage
          src={imageUrl}
          fill
          className="object-cover"
          alt={imageAlt}
        />
        <div className="absolute -bottom-5 md:-bottom-10 left-1/2 -translate-x-1/2 md:left-5 md:translate-x-0 w-fit bg-white p-2 rounded-xl z-10 shadow-lg">
            {Icon ? (
              <Icon className="h-10 w-10 md:h-20 md:w-20 text-red-600" strokeWidth={1.5} />
            ) : (
              <NextImage src="/c1.svg" alt="svg" width={80} height={80} className='h-10 w-10 md:h-20 md:w-20'/>
            )}
        </div>
      </div>
      <div className="w-full px-5 bg-gray-100 group-hover:bg-red-600 flex-grow">
        <div className="flex flex-col pt-8 md:pt-14 pb-5 items-center md:items-start">
          <div className="w-full flex flex-col gap-y-4">
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
