
import Image from 'next/image';
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

    <section className="container mx-auto p-4 md:p-4 flex justify-center m-4 ">
      <div className="flex flex-col md:flex-row overflow-hidden justify-center   items-center"> 
      
        <div className="relative h-64 w-64 md:w-96 md:h-96 "> 
          <Image
            src={imageURL}
            alt = {alt}
            fill
            className="object-cover rounded-br-[96px] rounded-tl-[96px] md:rounded-br-[128px] md:rounded-tl-[128px]"
          />
        </div>

        <div className="w- h-fit md:w-1/2 px-8 md:h-120 flex flex-col justify-around items-start">

          <HeaderWithDescription {...headerData}/>
          <div className='w-full flex justify-center md:justify-start md:m-8'>
          <PrimaryButton buttonText={buttonText} ButtonIcon={ArrowRightIcon} buttonHref={buttonHref}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;