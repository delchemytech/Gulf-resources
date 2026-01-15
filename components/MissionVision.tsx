import { LucideIcon } from "lucide-react";
import NextImage from "next/image";

interface MissionItem {
  id: string;
  title: string;
  icon?: string;
  lucideIcon?: LucideIcon;
  alt_text?: string;
  desc: string;
}

const MissionVision = ({data}: { data: MissionItem[] }) => {
  return (
    <section className="grid sm:grid-cols-2 justify-center my-8 items-stretch mx-auto p-4 md:p-6 gap-6 max-w-4xl">
      {data.map((item) => {
        const LucideIconComponent = item.lucideIcon;
        return (
          <div
            key={item.id}
            className={`h-full col-span-${
              item.id == "3" ? 2 : 1
            } border flex flex-col items-center space-y-2 md:space-y-3 md:items-start shadow-md rounded-lg p-5 md:p-6 border-gray-200 bg-white`}
          >
            {LucideIconComponent ? (
              <LucideIconComponent className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
            ) : item.icon ? (
              <NextImage
                src={item.icon}
                alt={item.alt_text || "icon"}
                width={48}
                height={48}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            ) : null}
            <div className="pt-1 text-lg md:text-xl text-black font-bold">
              {item.title}
            </div>
            <p className="text-sm md:text-base font-medium text-center md:text-start text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default MissionVision;
