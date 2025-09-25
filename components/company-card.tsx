// components/ServiceCard.tsx
import Image from 'next/image';
import Link from 'next/link'; // Assuming the "VIEW COMPANY" button links somewhere

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  companyLink: string; // URL for the "VIEW COMPANY" button
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
      relative // Needed for absolute positioning of the pseudo-border
      bg-white
      rounded-tl-4xl rounded-br-4xl           // Rounded corners for the card
      overflow-hidden        // Ensures image corners match card corners
      shadow-2xl             // Stronger shadow for depth
      border-b-2 border-r-2  // Added a subtle border for effect
      border-transparent     // Default transparent border
      group                  // For hover effects on children
      hover:border-red-600   // Red border on hover
      max-w-sm               // Max width for the card
      mx-auto                // Center the card
    ">
      {/* Custom border effect with pseudo-elements, adjusted to fit the rounded corners better */}
      {/* <div className="absolute inset-0 rounded-tl-2xl border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> */}

      {/* Image Section */}
      <div className="relative h-30 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill" // Makes image fill the parent div
          objectFit="cover" // Covers the area without distortion
          className="rounded-tl-2xl" // Rounds only top corners of image
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