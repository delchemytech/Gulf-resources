import React from 'react'
import CardTemp from '../ui/CardTemp';

interface service {
  key:number;
    ImageURL:string;
    title:string;
    desc:string;
    points?:string[];
}

const CompaniesService = ({Services}:{Services:service[]}) => {
  return (
    <div className='mb-16'>
      <div className="container max-w-7xl space-y-8 mx-auto flex flex-col w-full justify-center">

          <h1  className="text-center text-black font-semibold text-5xl m-8 ">
            Our Services
          </h1>

          <div className="flex flex-wrap gap-16 justify-center">
            {Services.map((service)=>(
                <CardTemp {...service} show_button={false} key={service.key} 
            />
            ))}
          </div>
        </div>

    </div>
  )
}


export default CompaniesService