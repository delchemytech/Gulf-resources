
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import HeaderWithDescription, { headerData } from './ui/HeaderWithDescription';
import PrimaryButton from './ui/PrimaryButton';
import RedParallelograms from './Icons/RedParallelograms';

interface data{
  imageURL : string;
  alt:string;
  headerData:headerData;
  buttonText:string;
  buttonHref:string;

}


const AboutSection = ({imageURL,alt,headerData,buttonText,buttonHref}:data) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"> 
        
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2"> 
            <div className="relative h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                src={imageURL}
                alt={alt}
                fill
                className="object-cover rounded-tl-[64px] rounded-br-[64px] shadow-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Red Tagline with Parallelograms */}
            <div className="flex items-center gap-2">
              <RedParallelograms className="w-6 h-3 text-red-600" />
              <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                {headerData.tagline}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {headerData.title}
            </h2>

            {/* Description */}
            <div className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl space-y-4">
              {headerData.bodyText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <PrimaryButton 
                buttonText={buttonText} 
                ButtonIcon={ArrowRightIcon} 
                buttonHref={buttonHref}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;