interface MissionItem {
  id: string;
  title: string;
  icon: string;
  alt_text: string;
  desc: string;
}

const MissionVision = ({data}: { data: MissionItem[] }) => {
  return (
    <section className="grid sm:grid-cols-2 justify-center my-10 items-center mx-auto p-4 md:p-8 gap-8 max-w-5xl ">
      {data.map((item) => (
        <div
          key={item.id}
          className={`h-full col-span-${
            item.id == "3" ? 2 : 1
          }  border-1 flex flex-col items-center space-y-2 md:space-y-5 md:items-start shadow-xl rounded-md p-8  border-gray-200`}
        >
          <img
            src={item.icon}
            alt={item.alt_text}
            className="w-10 h-10 md:w-20 md:h-20"
          />
          <div className="pt-2 text-base md:text-3xl text-black font-bold  ">
            {item.title}{" "}
          </div>
          <p className="text-xs md:text-lg font-light text-center md:text-start text-gray-500">
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default MissionVision;
