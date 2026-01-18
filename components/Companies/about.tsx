
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import HeaderWithDescription, { headerData } from '../ui/HeaderWithDescription';
import PrimaryButton from '../ui/PrimaryButton';

interface data{
  imageURL : string;
  alt:string;
  headerData:headerData;
  buttonText:string;
  buttonHref:string;

}


const About = ({imageURL,alt,headerData,buttonText,buttonHref}:data) => {
  return (
    <section className="container mx-auto p-4 md:p-4 flex justify-center m-4 ">
    <div className="flex flex-col md:flex-row overflow-hidden justify-center  items-center md:items-start"> 
    
      <div className="relative h-64 w-64 md:w-[560px] md:h-[600px] "> 
        <Image
          src={imageURL}
          alt = {alt}
          fill
          className="object-cover rounded-br-xl rounded-xl md:rounded-br-[64px] md:rounded-tl-[32px]"
        />
      </div>

      <div className=" h-fit md:w-1/2 px-8 md:h-120 flex flex-col justify-start items-start ">

        <HeaderWithDescription {...headerData}/>
        <div className='w-full flex justify-center md:justify-start '>
        <PrimaryButton buttonText={buttonText} ButtonIcon={ArrowRightIcon} buttonHref={buttonHref}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
