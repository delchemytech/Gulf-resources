
import React from 'react'




const MissionVision = () => {
  const data = [
    {
      id: "1",
      title: "Mission",
      icon: "/mission.svg",
      alt_text: "Mission Icon",
      desc: "cardinate premier techonology without substainable leadership work...",
    },
    {
      id: "2",
      title: "Vision",
      icon: "/vision.svg",
      alt_text: "Mission Icon",
      desc: "cardinate premier techonology without substainable leadership work...",
    },
  ];

  return (
    <div className="flex justify-center my-10 items-center mx-auto p-4 md:p-8 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-90 h-60 border-1 shadow-xl rounded-md p-8  border-gray-200"
        >
          <img src={item.icon} alt={item.alt_text} width={64} height={64} />
          <div className="pt-2 text-lg font-bold ">{item.title}</div>
          <p className="text-sm font-light text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default MissionVision;
