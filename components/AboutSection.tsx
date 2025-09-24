
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 

const AboutSection = () => {
  return (

    <section className="container mx-auto p-4 md:p-8 my-10 flex justify-center m-4">
      <div className="flex flex-col md:flex-row overflow-hidden justify-center items-center"> 
      
        <div className="relative w-90 h-90 "> 
          <Image
            src="/workers.png"
            alt="Two workers smiling"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-red-500 text-sm font-semibold uppercase mb-2 flex items-center">
            <span className="text-red-500 mr-2 text-xl leading-none">&mdash;</span> ABOUT OUR COMPANY
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Gulf Resources
          </h2>
          <p className="text-gray-600 mb-6">
            Appropriately empower dynamic leadership skills after business portals.
            Globally myocardinate interactive supply chains with distinctive quality
            vectors.
          </p>
          <Link href="/contact">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center w-max">
              CONTACT WITH US <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;