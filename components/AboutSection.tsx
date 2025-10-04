
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import HeaderWithDescription from './ui/HeaderWithDescription';
import PrimaryButton from './ui/PrimaryButton';

const AboutSection = () => {
  return (

    <section className="container mx-auto p-4 md:p-8 my-10 flex justify-center m-4">
      <div className="flex flex-col md:flex-row overflow-hidden justify-center   items-center"> 
      
        <div className="relative w-120 h-120 "> 
          <Image
            src="/workers.png" 
            alt="Two workers smiling"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 h-120 flex flex-col justify-between  items-start">

          <HeaderWithDescription title='Gulf Resources' tagline='ABOUT OUR COMPANY' 
          bodyText='Appropriately empower dynamic leadership skills after business portals.
            Globally myocardinate interactive supply chains with distinctive quality
            vectors.'/>
          <PrimaryButton buttonText='CONTACT WITH US' ButtonIcon={ArrowRightIcon} buttonHref='/about'/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;