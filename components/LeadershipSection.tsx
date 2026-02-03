import React from "react";
import HeaderWithDescription from "./ui/HeaderWithDescription";
import Image from "next/image";

const LeadershipSection = () => {
  const teamData = [
    {
      key: "1",
      imageURL: "/webp/leader_1.webp",
      imgAlt: "Ahmed Al-Mansouri - Gulf Resources CEO",
      name: "Ahmed Al-Mansouri",
      pos: "Chief Executive Officer",
      desc: "Visionary leader with over 15 years of experience in Gulf business operations and strategic development.",
    },
    {
        key: "2",
        imageURL: "/webp/leader_1.webp",
        imgAlt: "Ahmed Al-Mansouri - Gulf Resources Leadership Team",
        name: "Ahmed Al-Mansouri",
        pos: "Chief Executive Officer",
        desc: "Visionary leader with over 15 years of experience in Gulf business operations and strategic development.",
      },
      {
        key: "3",
        imageURL: "/webp/leader_1.webp",
        imgAlt: "Ahmed Al-Mansouri - Gulf Resources Management",
        name: "Ahmed Al-Mansouri",
        pos: "Chief Executive Officer",
        desc: "Visionary leader with over 15 years of experience in Gulf business operations and strategic development.",
      },
      {
        key: "4",
        imageURL: "/webp/leader_1.webp",
        imgAlt: "Ahmed Al-Mansouri - Gulf Resources Executive Team",
        name: "Ahmed Al-Mansouri",
        pos: "Chief Executive Officer",
        desc: "Visionary leader with over 15 years of experience in Gulf business operations and strategic development.",
      },
  ];

  return (
    <section className="container mx-auto max-w-7xl p-8 flex flex-col justify-between">
      <HeaderWithDescription
        tagline="OUR TEAM"
        title="Leadership Team"
        bodyText="Meet the experienced professionals driving Gulf Track Groups success"
      />

      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 justify-center items-center w-full gap-8 mt-16">
        {teamData.map((item)=>(
        <div key={item.key} className="flex flex-col rounded-lg p-8 shadow-md border-1 border-gray-200 gap-4">
          <div className="flex p-4 w-fit rounded-full bg-[#F5F7F8] ">
            <Image src={item.imageURL} height={50} width={50} alt={item.imgAlt}/>
          </div>
          <div className="font-semibold text-black text-2xl ">{item.name}</div>
          <div className="text-black">{item.pos} </div>
          <div className="text-gray-400">
            {item.desc}
          </div>
        </div>
        ))}
       
      </div>
    </section>
  );
};

export default LeadershipSection;
