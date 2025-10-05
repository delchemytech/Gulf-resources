import Image from "next/image";
import HeaderWithDescription from "./ui/HeaderWithDescription";
import TrustBadges from "./ui/TrustBadges";





export default function WhyChooseUs() {
const trustData  = [{
  id:'1',
  title:'Reliability',
  imageURL:"/c1.svg", 
  desc:"Consistent, dependable service delivery that you can count on, backed by our proven track record of excellence."
},
{
  id:'2',
  title:'Expertise',
  imageURL:"/c1.svg", 
  desc:"Deep industry knowledge and specialized skills across all our service areas, ensuring professional solutions."
},
{
  id:'3',
  title:'Customer Focus',
  imageURL:"/c1.svg", 
  desc:"Client satisfaction is our priority. We tailor our services to meet your specific needs and exceed expectations."
},
{
  id:'4',
  title:'Diversified Services',
  imageURL:"/c1.svg", 
  desc:"One-stop solution for multiple business needs, providing convenience and integrated service delivery."
}
]



  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute  bottom-0 w-full h-9/10 bg-red-200 opacity-10 transform -skew-y-2 origin-bottom-left overflow-hidden">
        {/* Absolute Background Shape 1 (Top Left Angled Red Line/Overlay) */}
        <div className="absolute -top-10 left-0 w-full h-1/2 bg-red-600 transform -skew-y-15 origin-top-left -translate-y-1/4"></div>

        <div className="absolute  bottom-0 w-full h-1/2 bg-red-600 transform -skew-y-15 origin-bottom-right translate-y-1/4"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {" "}
        {/* z-10 ensures content is above background shapes */}
        <HeaderWithDescription
          title="Why choose us "
          tagline="Why Gulf Resources"
          bodyText="Our commitment to excellence sets us apart in the competitive Gulf business landscape"
        />
        <div className="w-full flex justify-center items-center gap-16 py-16 ">
          {trustData.map((item)=>(
            <TrustBadges key={item.id}  {...item}/>

          ))}
        
    


        </div>
      </div>
    </section>
  );
}
