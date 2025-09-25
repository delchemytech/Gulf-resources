// components/ServiceCard.tsx
import Image from 'next/image';
import Link from 'next/link'; // Assuming the "VIEW COMPANY" button links somewhere

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  companyLink: string;
}

export default function CompanyCard({
  imageUrl,
  imageAlt,
  title,
  description,
  companyLink,
}: ServiceCardProps) {
  return (
    <div className=" h-120
      relative
      bg-white
      rounded-tl-4xl rounded-br-4xl
      overflow-hidden
      shadow-2xl
      border-2
      border-transparent
      group
      hover:border-red-600  
      max-w-sm
      mx-auto 
          ">
      
      <div className="relative h-30 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill" 
          objectFit="cover"
          className="rounded-tl-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-90">
        <h3 className="text-2xl font-semibold text-gray-800 mb-1 ">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 h-30 overflow-hidden ">
          {description}
        </p>
        <div className='felx flex-col'>

        {/* Progress Bar (simplified) */}
        <div className="h-2 bg-gray-200 rounded-full mb-6">
          <div className="h-full bg-green-500 rounded-full w-2/3"></div> {/* Adjust w-X/X for progress */}
        </div>

        {/* Button */}
        <Link href={companyLink} passHref>
          <button className="
            w-2/3 py-3
            bg-red-800 hover:bg-red-600
            text-white font-semibold
            rounded-md
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
          ">
            VIEW COMPANY
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}