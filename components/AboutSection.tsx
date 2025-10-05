
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import HeaderWithDescription, { headerData } from './ui/HeaderWithDescription';
import PrimaryButton from './ui/PrimaryButton';

interface data{
  imageURL : string;
  alt:string;
  headerData:headerData;
  buttonText:string;
  buttonHref:string;

}


const AboutSection = ({imageURL,alt,headerData,buttonText,buttonHref}:data) => {
  return (

    <section className="container mx-auto p-4 md:p-8 my-10 flex justify-center m-4">
      <div className="flex flex-col md:flex-row overflow-hidden justify-center   items-center"> 
      
        <div className="relative w-120 h-120 "> 
          <Image
            src={imageURL}
            alt = {alt}
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 px-8 h-120 flex flex-col justify-between  items-start">

          <HeaderWithDescription {...headerData}/>
          <PrimaryButton buttonText={buttonText} ButtonIcon={ArrowRightIcon} buttonHref={buttonHref}/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;